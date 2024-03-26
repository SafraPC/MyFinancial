import React from 'react';
import { SelectedToDelete } from '../../Home.view';
import {
   Button,
   ButtonContainer,
   ButtonLabel,
   Container,
   Description,
   Separator,
} from './styles';
import { ModalSheetProps } from '../../../../components/BottomSheet';

interface ModalProps {
   item: SelectedToDelete;
   handleDelete: (index: number) => void;
   modalsheetRef: React.RefObject<ModalSheetProps>;
}

const DeleteModal: React.FC<ModalProps> = ({
   item,
   modalsheetRef,
   handleDelete,
}) => {
   const handleClose = () => {
      modalsheetRef.current?.close();
   };

   const handleConfirm = () => {
      handleDelete(item.index);
      modalsheetRef.current?.close();
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

export default DeleteModal;
