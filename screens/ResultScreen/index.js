
import React, { useEffect } from 'react';
import {
  FontAwesome,
} from '@expo/vector-icons';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
} from './styles';

import Tips from '../../components/Tips';

export default function ResultScreen({navigation}) {

  const handleButton1 = () => {
    navigation.navigate('AO');
  }

  return (
    <Wrapper>
      <Header 
      colors={['#FF3A3A', '#B71D37']}
      >
        <HeaderContainer>
          <Title>Classificação do TCE</Title>
          <BalanceContainer>
            <Value>
              <Bold>TCE GRAVE</Bold>
            </Value>            
          </BalanceContainer>
          <BalanceContainer>
            <Value>
              <Bold>5</Bold>
            </Value>            
          </BalanceContainer>
          <Title>E2 V2 M1 P0</Title>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle />
      </UseBalance>
      
      <Actions>
        <Action >
          <FontAwesome name="share-alt" size={30} color="#000" />
          <ActionLabel>Compartilhar</ActionLabel>
        </Action>
        <Action>
          <FontAwesome name="repeat" size={20} color="#000" />
           <ActionLabel>Repetir</ActionLabel>
        </Action>
      </Actions>
    </Wrapper>
  );
}

