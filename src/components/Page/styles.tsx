import styled from 'styled-components/native';

import {
   getStatusBarHeight,
   getBottomSpace,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
   padding-top: ${getStatusBarHeight()}px;
   padding-bottom: ${getBottomSpace()}px;
   flex: 1;
   background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
   flex: 1;
   padding: 16px;
`;
