import React from 'react';
import { SelectedToDelete } from '../../Home.view';
import { CustomExpanseKey } from '../../../../stores/userTransactions';
import {
   Button,
   ButtonContainer,
   ButtonLabel,
   Container,
   Description,
   Separator,
} from './styles';
import { BottomSheetProps } from '../../../../components/BottomSheet';

interface ModalProps {
   item: SelectedToDelete;
   handleDelete: (index: number) => void;
   bottomSheetRef: React.RefObject<BottomSheetProps>;
}

const Modal: React.FC<ModalProps> = ({
   item,
   bottomSheetRef,
   handleDelete,
}) => {
   const handleClose = () => {
      bottomSheetRef.current?.close();
   };

   const handleConfirm = () => {
      handleDelete(item.index);
      bottomSheetRef.current?.close();
   };

   return (
      <Container>
         <Description>
            Você tem certeza que deseja excluir{' '}
            {item.kind === 'earning' ? 'a renda' : 'a despesa'} de{' '}
            {item.item.key}?
         </Description>
         <ButtonContainer>
            <Button isConfirm onPress={handleConfirm}>
               <ButtonLabel>Excluir</ButtonLabel>
            </Button>
            <Separator />
            <Button onPress={handleClose}>
               <ButtonLabel>Fechar</ButtonLabel>
            </Button>
         </ButtonContainer>
      </Container>
   );
};

export default Modal;
