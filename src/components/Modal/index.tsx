/* eslint-disable react/display-name */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import {
   Modal,
   Container,
   Header,
   Content,
   Title,
   CloseButton,
   ModalComponentProps,
   Scroll,
} from './styles';

interface Props extends ModalComponentProps {
   title: string;
   maxHeigth?: boolean;
}

export interface ModalSheetProps {
   open: () => void;
   close: () => void;
}

const ModalSheet = forwardRef<ModalSheetProps, Props>(
   ({ title, children, maxHeigth, ...rest }, ref) => {
      const { colors } = useTheme();
      const [visible, setVisible] = useState(false);

      const open = () => {
         setVisible(true);
      };

      const close = () => {
         setVisible(false);
      };

      useImperativeHandle(ref, () => ({
         open,
         close,
      }));

      return (
         <Modal
            isVisible={visible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            propagateSwipe
            useNativeDriver
            onBackdropPress={close}
            {...rest}>
            <Container maxHeigth={maxHeigth}>
               <Header>
                  <Title>{title}</Title>
                  <CloseButton onPress={close}>
                     <Icon name="x" size={18} color={colors.primary} />
                  </CloseButton>
               </Header>
               <Scroll>
                  <Content>{children}</Content>
               </Scroll>
            </Container>
         </Modal>
      );
   }
);

export default ModalSheet;
