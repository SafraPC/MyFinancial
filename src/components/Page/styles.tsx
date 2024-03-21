import styled from 'styled-components/native';

import {
   getStatusBarHeight,
   getBottomSpace,
} from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView.attrs({
   contentContainerStyle: {
      flexGrow: 1,
   },
})`
   padding-top: ${getStatusBarHeight()}px;
   padding-bottom: ${getBottomSpace() + 16}px;
   flex: 1;
   background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
   flex: 1;
   padding: 16px;
`;
