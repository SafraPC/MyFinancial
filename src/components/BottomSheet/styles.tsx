import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import RNModal, { ModalProps } from 'react-native-modal';

export type ModalComponentProps = Omit<
   Partial<ModalProps>,
   'isVisible' | 'onBackdropPress' | 'onBackdropPress'
>;

export const Modal = styled(RNModal)<ModalComponentProps>`
   justify-content: flex-end;
   margin: 0;
`;

export const Scroll = styled.ScrollView.attrs({
   contentContainerStyle: {
      flexGrow: 1,
      paddingBottom: getBottomSpace() + 75,
   },
})``;

export const Container = styled.View`
   background: ${({ theme }) => theme.colors.primary};
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   max-height: 90%;
   padding-bottom: ${getBottomSpace()}px;
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
