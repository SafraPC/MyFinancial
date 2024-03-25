/* eslint-disable react/display-name */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
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
}

export interface BottomSheetProps {
   open: () => void;
   close: () => void;
}

const BottomSheet = forwardRef<BottomSheetProps, Props>(
   ({ title, children, ...rest }, ref) => {
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
            <Container>
               <Header>
                  <Title>{title}</Title>
                  <CloseButton onPress={close}>
                     <Feather name="x" size={18} color={colors.primary} />
                  </CloseButton>
               </Header>

               <Content>
                  <Scroll>
                     <TouchableOpacity activeOpacity={1}>
                        {children}
                     </TouchableOpacity>
                  </Scroll>
               </Content>
            </Container>
         </Modal>
      );
   }
);

export default BottomSheet;
