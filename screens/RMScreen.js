import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function RMScreen({route, navigation}) {

  const valueRM = route.params.value.value;
  
  const handleButton1 = () => {
    navigation.navigate('RP', {
      value: {
        value: 1,
      }
      });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}> 
      <ScrollView>
          <RectButton style={styles.button} onPress={handleButton1}>
            <Text style={styles.buttonText}>6 - Cumprimento de ordens com duas ações</Text>
          </RectButton> 
          <RectButton style={styles.button} onPress={handleButton1}>
            <Text style={styles.buttonText}>5 - Elevação da mão acima do nível da clavícula ao estímulo da cabeça ou pescoço</Text>
          </RectButton>
          <RectButton style={styles.button} onPress={handleButton1}>
            <Text style={styles.buttonText}>4 - Flexão do membro superior ao nível do cotovelo, padrão predominante normal</Text>
          </RectButton>
          <RectButton style={styles.button} onPress={handleButton1}>
            <Text style={styles.buttonText}>3 - Flexão do membro superior ao nível do cotovelo, padrão predominante claramente anormal</Text>
          </RectButton>
          <RectButton style={styles.button} onPress={handleButton1}>
            <Text style={styles.buttonText}>2 - Extensão do membro superior ao nível do cotovelo</Text>
          </RectButton> 
          <RectButton style={styles.button} onPress={handleButton1}>
            <Text style={styles.buttonText}>1 - Ausência de movimento dos membros superiores/inferiores, sem fatores de interferência</Text>
          </RectButton> 
          <RectButton style={styles.button} onPress={handleButton1}>
            <Text style={styles.buttonText}>NT - Fator que limita resposta motoraExtensão do membro superior ao nível do cotovelo</Text>
          </RectButton> 
          </ScrollView>   
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      //marginTop: 40,
      //marginBottom: 40,
      alignItems: 'center'
  },
  title: {

  },
  logo: {
      flex: 1,
      height: 120,
      width: 90,
      alignSelf: "center",
      margin: 30
  },
  input: {
      height: 48,
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
      paddingLeft: 16
  },
  button: {
      backgroundColor: '#f4511e',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      //height: 48,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: 'center'
  },
  buttonTitle: {
      color: 'white',
      fontSize: 16,
      fontWeight: "bold"
  },
  footerView: {
      flex: 1,
      alignItems: "center",
      marginTop: 20
  },
  footerText: {
      fontSize: 16,
      color: '#2e2e2d'
  },
  footerLink: {
      color: "#788eec",
      fontWeight: "bold",
      fontSize: 16
  },
  buttonContainer: {
    flexDirection: "row"
  },
  buttonText: {
    margin: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  }
})