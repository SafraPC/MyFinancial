import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppRoutes } from '../../../../navigation/types';
import {
   CategoryType,
   SubcategoryType,
} from '../../application/categoriesTypes';
import Page from '../../../../components/Page';
import { Input } from '../../../../components/Input';
import { Select } from '../../../../components/Select';
import { Button, ButtonLabel, ScreenSeparator } from './styles';
import { categories, subcategories } from '../../application/categories';

interface Errors {
   key: string;
   value: string;
}

const defaultErrors = {
   key: '',
   value: '',
};

const CreateData: React.FC = () => {
   const { handleAdd, isEarning, selectedAddOption } =
      useRoute<RouteProp<AppRoutes, 'createData'>>().params;
   const [key, setKey] = useState('');
   const [value, setValue] = useState('');
   const [category, setCategory] = useState<CategoryType | undefined>();
   const [subcategory, setSubcategory] = useState<
      SubcategoryType<CategoryType> | undefined
   >();
   const [errors, setErrors] = useState<Errors>(defaultErrors);
   const navigation = useNavigation();

   useEffect(() => {
      navigation.setOptions({
         headerTitle: selectedAddOption.title,
      });
   }, [selectedAddOption]);

   const handleSave = () => {
      setErrors(defaultErrors);
      if (!key || !value) {
         setErrors({
            key: key ? '' : 'Campo obrigatório',
            value: value ? '' : 'Campo obrigatório',
         });
         return;
      }

      handleAdd({
         key,
         value: parseFloat(value.replace('R$', '').replace(',', '.')),
         category: {
            category,
            subcategory,
         },
      });
   };

   return (
      <Page>
         <KeyboardAwareScrollView
            contentContainerStyle={{
               flexGrow: 1,
            }}>
            <Input
               title="Insira o nome"
               placeholder="Ex: Mercado"
               required
               error={errors.key}
               onChangeText={setKey}
               value={key}
            />
            <Input
               keyboardType="number-pad"
               title="Insira o valor"
               placeholder="Ex: R$100,00"
               required
               error={errors.value}
               onChangeText={setValue}
               value={value}
            />
            <Select
               data={categories}
               onSelect={setCategory}
               selected={category}
               placeholder="Selecione a categoria"
               title="Categoria"
            />
            {!isEarning && category ? (
               <Select
                  data={subcategories[category]}
                  onSelect={setSubcategory}
                  selected={subcategory}
                  placeholder="Selecione a subcategoria"
                  title="Subcategoria"
               />
            ) : null}
            <ScreenSeparator />
            <Button onPress={handleSave}>
               <ButtonLabel>Salvar</ButtonLabel>
            </Button>
         </KeyboardAwareScrollView>
      </Page>
   );
};

export { CreateData };
