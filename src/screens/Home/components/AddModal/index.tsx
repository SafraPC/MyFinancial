import React from 'react';
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

interface ModalProps {
   modalsheetRef: React.RefObject<ModalSheetProps>;
   handleAdd: (data: CustomExpanseKey) => void;
}

const AddModal: React.FC<ModalProps> = ({ handleAdd, modalsheetRef }) => {
   const handleSave = () => {
      handleAdd({ key: 'key', value: 0 });
      modalsheetRef.current?.close();
   };

   const handleClose = () => {
      modalsheetRef.current?.close();
   };

   return (
      <Container>
         <Input title="Insira " required />
         <Input title="Insira o valor" required />
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
