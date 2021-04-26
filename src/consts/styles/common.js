import {Colors} from '@src/styles/colors';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {vs} from './scalingUtils';

export const ContainerStyled = styled.SafeAreaView`
  flex: 1;
  background: ${Colors.white};
  padding-top: ${vs(Platform.OS === 'ios' ? 0 : 20)}px;
`;

export const ContainerScrollStyled = styled.ScrollView`
  flex: 1;
  background: ${Colors.white};
  padding-top: ${vs(Platform.OS === 'ios' ? 0 : 20)}px;
`;
