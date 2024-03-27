import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import {
   categories,
   earningCategories,
   subcategories,
} from '../../application/categories';
import { Container, ErrorText, Label, RequiredText } from './styles';
import { useTheme } from 'styled-components/native';

interface AutoCompleteInputProps {
   title: string;
   placeholder: string;
   required?: boolean;
   isError?: boolean;
   onSelectedItem: (text: string) => void;
   error?: string;
   disabled?: boolean;
   category?: string;
   isEarning?: boolean;
}

const filterCategory = (categories: string[], query: string) => {
   return (
      categories?.filter(item =>
         item?.toLowerCase()?.includes(query?.toLowerCase())
      ) || []
   );
};

const AutocompleteInput: React.FC<AutoCompleteInputProps> = ({
   onSelectedItem,
   placeholder,
   title,
   isError,
   required,
   isEarning,
   category,
   error,
   disabled,
}) => {
   const { colors } = useTheme();
   const [query, setQuery] = useState('');
   const [isFocused, setIsFocused] = useState(false);

   useEffect(() => {
      setQuery('');
      onSelectedItem('');
      setIsFocused(false);
   }, [category]);

   const items = isEarning
      ? filterCategory(earningCategories, query)
      : category
      ? filterCategory(
           subcategories[category as keyof typeof subcategories],
           query
        )
      : filterCategory(categories, query);

   const handleSelectItem = useCallback((item: string) => {
      setQuery(item);
      onSelectedItem(item);
      setIsFocused(false);
   }, []);

   const lowerCaseItems = items.map(item => item.toLowerCase());

   return (
      <Container isFocused={isFocused}>
         {title ? (
            <Label>
               {title} {required ? <RequiredText>*</RequiredText> : null}
            </Label>
         ) : null}
         <TouchableWithoutFeedback
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
               setIsFocused(false);
               if (lowerCaseItems.includes(query.toLowerCase())) {
                  return;
               }
               onSelectedItem(query);
            }}>
            <Autocomplete
               editable={disabled ? false : true}
               style={{
                  height: 48,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: isError
                     ? colors.darkRed
                     : isFocused
                     ? colors.inputFocus
                     : colors.gray,
               }}
               hideResults={!isFocused}
               data={items}
               value={query}
               defaultValue={query}
               onChangeText={text => {
                  setQuery(text);
                  if (!isFocused) {
                     setIsFocused(true);
                  }
               }}
               placeholder={placeholder}
               flatListProps={{
                  keyExtractor: (_, index) => index.toString(),
                  renderItem: ({ item }) => (
                     <TouchableOpacity onPress={() => handleSelectItem(item)}>
                        <Text>{item}</Text>
                     </TouchableOpacity>
                  ),
               }}
            />
         </TouchableWithoutFeedback>
         {error ? <ErrorText>{error}</ErrorText> : null}
      </Container>
   );
};

export default AutocompleteInput;
