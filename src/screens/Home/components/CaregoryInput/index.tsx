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
import { Input } from '../../../../components/Input';

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

   const RenderList = useCallback(() => {
      if (!isFocused) return null;
      return items.map((item, index) => (
         <TouchableOpacity
            key={index}
            onPress={() => handleSelectItem(item)}
            style={{
               padding: 10,
               backgroundColor: colors.white,
               borderBottomWidth: 1,
            }}>
            <Text>{item}</Text>
         </TouchableOpacity>
      ));
   }, [items, query, isFocused]);

   return (
      <Container isFocused={isFocused}>
         <Input
            onFocused={() => setIsFocused(true)}
            title={title}
            placeholder={placeholder}
            required={required}
            error={error}
            onChangeText={setQuery}
            value={query}
         />
         <RenderList />
      </Container>
   );
};

export default AutocompleteInput;
