import React from "react";
import { Image, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import img10 from "../../assets/images/10.png";
import colors from "../../constants/Colors";

export default function InfoUpdateScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.light.background }}>
      <View style={styles.container}>
        <ScrollView>
          <Image source={img10} />
          <Text style={styles.title}>O que há de novo na ECG?</Text>
          <Text style={styles.text}>
            A Escala de Coma de Glasgow fornece um índice clínico do
            comprometimento agudo 'geral' da função cerebral, ou o chamado
            'nível de consciência'. Quando foi descrito, características de
            disfunção focal, como sinais de tronco encefálico, não foram
            incorporadas e, em vez disso, deveriam ser avaliadas separadamente.
            No entanto, tem havido opiniões de que os índices ou pontuações que
            combinam uma avaliação do "nível de consciência" e da função do
            "tronco cerebral" podem ter um lugar útil. 1-3 Em resposta, o GCS
            Pupils Score (GCS-P) foi construído para reunir informações sobre a
            capacidade de resposta do paciente conforme refletido no GCS Score e
            a reação da pupila.
          </Text>
          <Text style={styles.text}>
            A pontuação recebe 2 quando ambas as pupilas reagem a luminosidade,
            recebe 1 quando apenas uma pupila reage e 0 quando não há
            reatividade das pupilas{" "}
          </Text>
          <Text style={styles.text}>
            O GCS-P é calculado subtraindo a pontuação da reatividade da pupila
            (PRS) da pontuação total da Escala de Coma de Glasgow (GCS):
          </Text>
          <Text style={styles.text}>GCS-P = GCS - PRS</Text>
          <Text style={styles.title}>O papel da pontuação GCS-P</Text>
          <Text style={styles.text}>
            O GCS-P combinado não se destina a substituir o papel de avaliação e
            relatório separados de cada componente da Escala de Coma de Glasgow
            e da resposta da pupila no cuidado de pacientes individuais. Ele
            expande o escore GCS como um índice abreviado simples da gravidade
            do estado clínico e do prognóstico de um paciente, especialmente em
            lesões mais graves. Pode ser útil para evitar vieses nas decisões de
            percepções de médicos individuais, na elaboração de diretrizes e na
            descrição de resultados em grupos de pacientes. O GCS-P fornece um
            índice unidimensional de gravidade clínica no qual informações sobre
            outras características prognósticas importantes, como a idade, podem
            ser adicionadas em um formato simples que provavelmente será útil na
            prática clínica.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
    backgroundColor: colors.light.background,
  },
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30,
  },

  title: {
    margin: 10,
    fontSize: 22,
    color: colors.light.bannerText,
    fontWeight: "bold",
  },
  text: {
    margin: 10,
    fontSize: 18,
    color: colors.light.bannerText,
  },
});
