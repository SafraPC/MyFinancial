import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Label = styled.Text`
   font-size: 18px;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
   font-size: 18px;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.white};
`;

export const ElementContainer = styled.View`
   margin-top: 16px;
   margin: 16px 0;
   padding: 0 16px;
   background-color: ${({ theme }) => theme.colors.darkElements};
   border-radius: 8px;
   flex-direction: row;
   justify-content: space-between;
`;

export const ElementText = styled.Text`
   margin: 16px 0;
   font-size: 18px;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.white};
`;

export const Separator = styled.View`
   margin: 8px 0;
   width: 16px;
`;

const width = Dimensions.get('window').width;

export const EmptyContainer = styled.View`
   justify-content: center;
   height: 100px;
   width: ${width - 32}px;
   background-color: ${({ theme }) => theme.colors.darkElements};
   border-radius: 8px;
   align-items: center;
`;

export const EmptyText = styled.Text`
   font-size: 18px;
   color: ${({ theme }) => theme.colors.softRed};
   font-weight: bold;
`;
