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
import { SelectedKind } from '../../Home.view';

interface ModalProps {
   setSelectedToAdd: React.Dispatch<
      React.SetStateAction<SelectedKind | undefined>
   >;
   modalsheetRef: React.RefObject<ModalSheetProps>;
   handleAdd: (data: CustomExpanseKey) => void;
}

const AddModal: React.FC<ModalProps> = ({
   handleAdd,
   modalsheetRef,
   setSelectedToAdd,
}) => {
   const resetValue = () => {
      modalsheetRef.current?.close();
      setSelectedToAdd(undefined);
   };

   const handleSave = () => {
      handleAdd({ key: 'key', value: 0 });
      resetValue();
   };

   const handleClose = () => {
      resetValue();
   };

   return (
      <Container>
         <Input title="Insira o nome" />
         <Input title="Insira o valor" />
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
