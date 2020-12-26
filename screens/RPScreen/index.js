import React from 'react';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Actions,
  Action,
  ActionLabel,
} from './styles';

export default function RPScreen({navigation}) {

  
  const handleButton1 = () => {
    navigation.navigate('Resultado', {
      value: {
        value: 1,
      }
      });
  }

  return (
    <HeaderContainer>
        <Header 
      colors={['#ffffff', '#ffffff']}
      >
        <Wrapper>
          <Actions>
            <Action onPress={handleButton1}>
              <ActionLabel>2 - Nenhuma reatividade em ambas as pupilas</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>1 - Sem reação em apenas uma das pupilas</ActionLabel>
            </Action> 
            <Action onPress={handleButton1}>
              <ActionLabel>0 - Caso as duas pupilas estejam funcionando normalmente</ActionLabel>
            </Action> 
          </Actions> 
         </Wrapper>        
         </Header>
      </HeaderContainer>
  );
}

