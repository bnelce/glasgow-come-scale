import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Actions,
  Action,
  ActionLabel,
} from './styles';

export default function RVScreen({navigation}) {

  
  const handleButton1 = () => {
    navigation.navigate('RM', {
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
              <ActionLabel>5 - Resposta adequada relativamente ao nome, local e data</ActionLabel>
            </Action> 
            <Action onPress={handleButton1}>
              <ActionLabel>4 - Resposta não orientada mas comunicação coerente</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>3 - Palavras isoladas intelígveis</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>2 - Apenas gemidos</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>1 - Ausência de resposta auditível, sem fatores de interferência</ActionLabel>
            </Action>
            <Action onPress={handleButton1}>
              <ActionLabel>NT - Fator que interfere com a comunicação</ActionLabel>
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
