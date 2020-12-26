import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Actions,
  Action,
  ActionLabel,
} from './styles';

export default function AOScreen({navigation}) {

  
  const handleButton1 = () => {
    navigation.navigate('RV', {
      value: {
        value: 1,
      }
      });
  }

  return (
    <HeaderContainer>
        <Header 
      colors={['#222020', '#0B0406']}
      >
        <Wrapper>
          <Actions>
            <Action onPress={handleButton1}>
              <ActionLabel>4 - Olhos abertos previamente a estimulação</ActionLabel>
            </Action> 
            <Action onPress={handleButton1}>
              <ActionLabel>3 - Abertura ocular após a ordem em tom de voz normal ou alta</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>2 - Abertura ocular após a estimulação da extremidade dos dedos</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>1 - Ausência persistente de abertura ocular, sem fatores de interferência</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>NT - Olhos fechado devido a fator local</ActionLabel>
            </Action> 
          </Actions> 
         </Wrapper>        
         </Header>
      </HeaderContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 10,
      alignItems: 'center',
      backgroundColor: '#000',
  },
  button: {
      backgroundColor: 'transparent',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: 'center',
      borderColor: '#ffffff',
      borderBottomLeftRadius: 0,
  },
  buttonText: {
    margin: 10,
    fontSize: 16,
    color: '#fff',
  }
})