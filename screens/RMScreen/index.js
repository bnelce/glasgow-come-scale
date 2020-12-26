import React from 'react';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Actions,
  Action,
  ActionLabel,
} from './styles';

export default function RMScreen({navigation}) {

  
  const handleButton1 = () => {
    navigation.navigate('RP', {
      value: {
        value: 1,
      }
      });
  }

  return (
    <HeaderContainer>
        <Header 
      colors={['#fff', '#fff']}
      >
        <Wrapper>
          <Actions>
            <Action onPress={handleButton1}>
              <ActionLabel>6 - Cumprimento de ordens com duas ações</ActionLabel>
            </Action> 
            <Action onPress={handleButton1}>
              <ActionLabel>5 - Elevação da mão acima do nível da clavícula ao estímulo da cabeça ou pescoço</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>4 - Flexão do membro superior ao nível do cotovelo, padrão predominante normal</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>3 - Flexão do membro superior ao nível do cotovelo, padrão predominante claramente anormal</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>2 - Extensão do membro superior ao nível do cotovelo</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>1 - Ausência de movimento dos membros superiores/inferiores, sem fatores de interferência</ActionLabel>
            </Action> 
            <Action onPress={handleButton1}>
              <ActionLabel>NT - Fator que limita resposta motora</ActionLabel>
            </Action> 
          </Actions> 
         </Wrapper>        
         </Header>
      </HeaderContainer>
  );
}

