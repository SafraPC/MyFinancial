import React, { useEffect, useState } from 'react';
import { ModalSheetProps } from '../../../../components/Modal';
import { CustomExpanseKey } from '../../../../stores/userTransactions';
import {
   Button,
   ButtonContainer,
   ButtonLabel,
   Container,
   Separator,
} from './styles';
import { Input } from '../../../../components/Input';
import AutocompleteInput from '../CaregoryInput';

interface ModalProps {
   isEarning?: boolean;
   modalsheetRef: React.RefObject<ModalSheetProps>;
   handleAdd: (data: CustomExpanseKey) => void;
}

interface Errors {
   key: string;
   value: string;
}

const defaultErrors = {
   key: '',
   value: '',
};

const AddModal: React.FC<ModalProps> = ({
   handleAdd,
   modalsheetRef,
   isEarning,
}) => {
   const [key, setKey] = useState('');
   const [value, setValue] = useState('');
   const [category, setCategory] = useState('');
   const [subcategory, setSubcategory] = useState('');
   const [cardName, setCardName] = useState<string>('');
   const [errors, setErrors] = useState<Errors>(defaultErrors);

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
      modalsheetRef.current?.close();
   };

   const handleClose = () => {
      modalsheetRef.current?.close();
   };

   return (
      <Container>
         <Input
            title="Insira o nome"
            keyboardType="number-pad"
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
         <AutocompleteInput
            isEarning={isEarning}
            onSelectedItem={setCategory}
            placeholder="Selecione uma categoria"
            title="Categoria"
         />
         <Input
            title="Nome do cartão"
            placeholder="Ex: Nubank"
            onChangeText={setCardName}
            value={cardName}
         />
         {!isEarning ? (
            <AutocompleteInput
               onSelectedItem={setSubcategory}
               category={category}
               disabled={!category}
               placeholder="Insira uma subcategoria"
               title="Insira uma subcategoria"
            />
         ) : null}

         <ButtonContainer>
            <Button onPress={handleSave}>
               <ButtonLabel>Salvar</ButtonLabel>
            </Button>
            <Separator />
            <Button isConfirm onPress={handleClose}>
               <ButtonLabel>Fechar</ButtonLabel>
            </Button>
         </ButtonContainer>
      </Container>
   );
};

export default AddModal;
