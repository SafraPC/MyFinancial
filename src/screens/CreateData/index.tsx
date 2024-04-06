import React, { useEffect, useRef, useState } from 'react';
import { Button, ButtonLabel, Container, ScreenSeparator } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
   CategoryType,
   SubcategoryType,
} from '../Home/application/categoriesTypes';
import { Input } from '../../components/Input';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AppRoutes } from '../../navigation/types';
import Page from '../../components/Page';
import ModalSheet, { ModalSheetProps } from '../../components/Modal';
import { TouchableOpacity } from 'react-native';

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
   const [cardName, setCardName] = useState<string>('');
   const [errors, setErrors] = useState<Errors>(defaultErrors);
   const navigation = useNavigation();
   const addModalRef = useRef<ModalSheetProps>(null);
   const [modalFilter, setModalFilter] = useState<string>('');

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
            cardName,
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
            <Input
               title="Nome do cartão"
               placeholder="Ex: Nubank"
               onChangeText={setCardName}
               value={cardName}
            />
            <TouchableOpacity
               onPress={() => {
                  addModalRef.current?.open();
               }}>
               <Input
                  title="Categoria"
                  placeholder="Selecione a categoria"
                  editable={false}
               />
            </TouchableOpacity>
            {!isEarning ? null : null}
            <ScreenSeparator />
            <Button onPress={handleSave}>
               <ButtonLabel>Salvar</ButtonLabel>
            </Button>
            <ModalSheet title={selectedAddOption.title} ref={addModalRef}>
               <Input
                  title="Filtrar por nome"
                  placeholder="Filtre pelo nome"
                  onChangeText={setModalFilter}
                  value={modalFilter}
               />
            </ModalSheet>
         </KeyboardAwareScrollView>
      </Page>
   );
};

export { CreateData };
