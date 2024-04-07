import styled from 'styled-components/native';
import RNModal, { ModalProps } from 'react-native-modal';

export type ModalComponentProps = Omit<
   Partial<ModalProps>,
   'isVisible' | 'onBackdropPress' | 'onBackdropPress'
>;

export const Modal = styled(RNModal)<ModalComponentProps>`
   margin: 0;
`;

export const Scroll = styled.ScrollView.attrs({
   contentContainerStyle: {
      flexGrow: 1,
   },
})``;

export const Container = styled.View<{ maxHeigth?: boolean }>`
   background: ${({ theme }) => theme.colors.primary};
   border-radius: 8px;
   max-height: 70%;
   height: ${({ maxHeigth }) => (maxHeigth ? '70%' : 'auto')};
`;

export const Header = styled.View`
   align-items: center;
   flex-direction: row;
   justify-content: space-between;
   padding: 12px 16px;
   border-bottom-width: 1px;
   border-bottom-color: ${({ theme }) => theme.colors.darkElements};
`;

export const Title = styled.Text`
   font-size: 16px;
   color: ${({ theme }) => theme.colors.white};
   flex: 1;
   font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity`
   align-items: center;
   justify-content: center;
   width: 32px;
   height: 32px;
   border-radius: 25px;
   background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
   padding: 16px;
`;
