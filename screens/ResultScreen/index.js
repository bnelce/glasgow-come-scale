import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
} from "./styles";

export default function ResultScreen({ navigation }) {
  const [ao, setAO] = useState("0");
  const [rv, setRV] = useState("0");
  const [rm, setRM] = useState("0");
  const [rp, setRP] = useState("0");
  const [total, setTotal] = useState("0");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [tceResult, setTceResult] = useState("");

  const getValues = async () => {
    try {
      const vAO = await AsyncStorage.getItem("@keyAO");
      const vRV = await AsyncStorage.getItem("@keyRV");
      const vRM = await AsyncStorage.getItem("@keyRM");
      const vRP = await AsyncStorage.getItem("@keyRP");

      setAO(vAO);
      setRV(vRV);
      setRM(vRM);
      setRP(vRP);

      let vTotal =
        parseInt(vAO) + parseInt(vRV) + parseInt(vRM) - parseInt(vRP);
      if (vTotal < 1) {
        vTotal = 1;
      }
      setTotal(vTotal);

      if ((vTotal >= 13) & (vTotal <= 15)) {
        setTceResult("TCE LEVE");
        setColor1("#1939B7");
        setColor2("#102693");
      }

      if ((vTotal >= 9) & (vTotal <= 12)) {
        setTceResult("TCE MODERADO");
        setColor1("#4E9F15");
        setColor2("#37800D");
      }

      if ((vTotal >= 1) & (vTotal <= 8)) {
        setTceResult("TCE GRAVE");
        setColor1("#B71017");
        setColor2("#930A1B");
      }

      if (vTotal < 1) {
        setTceResult("NÃO TESTADO");
        setColor1("#060606");
        setColor2("#000000");
        setTotal("NT");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getValues();
  }, []);

  const handleReset = () => {
    navigation.navigate("Home");
  };

  return (
    <Wrapper>
      <Header colors={[color1, color2]}>
        <HeaderContainer>
          <Title>Classificação do TCE</Title>
          <BalanceContainer>
            <Value>
              <Bold>{tceResult}</Bold>
            </Value>
          </BalanceContainer>
          <BalanceContainer>
            <Value>
              <Bold>{total}</Bold>
            </Value>
          </BalanceContainer>
          <Title>
            E{ao} V{rv} M{rm} P{rp}
          </Title>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle />
      </UseBalance>
      <Actions>
        {/*<Action>
          <FontAwesome name="share-alt" size={30} color="#000" />
          <ActionLabel>Compartilhar</ActionLabel>
        </Action>*/}
        <Action onPress={handleReset}>
          <FontAwesome name="repeat" size={20} color="#000" />
          <ActionLabel>Repetir</ActionLabel>
        </Action>
      </Actions>
    </Wrapper>
  );
}
