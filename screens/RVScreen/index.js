import React, { useEffect, useState } from 'react';
import {  StyleSheet, Text } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Actions,
  Action,
  ActionLabel,
} from './styles';

export default function RVScreen({navigation}) {
  const [value, setValue] = useState('0');
  const { getItem, setItem } = useAsyncStorage('@keyRV');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, [value]);
  
  const handleButton1 = (vl) => {
    writeItemToStorage(vl)
    navigation.navigate('RM');
  }
  
  return (
    <HeaderContainer>
        <Header 
      colors={['#fff', '#fff']}
      >
        <Wrapper>
          <Actions>
            <Text></Text>
            <Action onPress={() => handleButton1('5')}>
              <ActionLabel>5 - Resposta adequada relativamente ao nome, local e data</ActionLabel>
            </Action> 
            <Action onPress={() => handleButton1('4')}>
              <ActionLabel>4 - Resposta não orientada mas comunicação coerente</ActionLabel>
            </Action>
            <Action onPress={() => handleButton1('3')}>
              <ActionLabel>3 - Palavras isoladas intelígveis</ActionLabel>
            </Action>
            <Action onPress={() => handleButton1('2')}>
              <ActionLabel>2 - Apenas gemidos</ActionLabel>
            </Action>
            <Action onPress={() => handleButton1('1')}>
              <ActionLabel>1 - Ausência de resposta auditível, sem fatores de interferência</ActionLabel>
            </Action>
            <Action onPress={() => handleButton1('0')}>
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
