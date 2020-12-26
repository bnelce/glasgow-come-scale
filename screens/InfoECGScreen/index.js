import React from 'react';
import { Image, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import img10 from '../../assets/images/10.png'

export default function InfoECGScreen({navigation}) {

  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={styles.container}> 
        <ScrollView>        
              <Image source={img10} />
              <Text style={styles.title}>O que é a Escala de Coma de Glasglow?</Text>
              <Text style={styles.text}>A escala de coma de Glasgow é um método para definir o estado neurológico de pacientes com uma lesão cerebral aguda analisando seu nível de consciência. Esse importante recurso foi atualizado em abril de 2018 e é muito utilizado por profissionais de saúde logo após o trauma, auxiliando no prognóstico da vítima e na prevenção de eventuais sequelas.</Text>
              <Text style={styles.text}>Apesar de ser muito utilizada atualmente pela Medicina e Enfermagem, essa classificação de assistência é recente. Foi em 1974 que Graham Teasdale e Bryan J. Jennett (do Instituto de Ciências Neurológicas de Glasgow) publicaram oficialmente a escala na revista Lancet. O objetivo era fornecer uma metodologia de atendimento que apontasse tanto a profundidade do dano neurológico quanto a duração clínica de inconsciência e coma.</Text>
        </ScrollView> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      margin: 20,
      alignItems: 'center',
      backgroundColor: '#000'
  },
  logo: {
      flex: 1,
      height: 120,
      width: 90,
      alignSelf: "center",
      margin: 30
  }, 
  
  title: {
    margin: 10,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    margin: 10,
    fontSize: 18,
    color: '#fff',
  }
})
