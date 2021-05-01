import React, { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import {
  Wrapper,
  Header,
  HeaderContainer,
  Actions,
  Action,
  ActionLabel,
} from "./styles";
import {
  AdMobBanner,  
} from 'expo-ads-admob';


export default function RMScreen({ navigation }) {
  const [value, setValue] = useState("0");
  const { getItem, setItem } = useAsyncStorage("@keyRM");

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, [value]);

  const handleButton1 = (vl) => {
    writeItemToStorage(vl);
    navigation.navigate("RP");
  };

  return (
    <>
    <HeaderContainer>
      <Header colors={["#fff", "#fff"]}>
        <Wrapper>
          <Actions>
            <Action onPress={() => handleButton1("6")}>
              <ActionLabel>
                6 - Cumprimento de ordens com duas ações
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("5")}>
              <ActionLabel>
                5 - Elevação da mão acima do nível da clavícula ao estímulo da
                cabeça ou pescoço
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("4")}>
              <ActionLabel>
                4 - Flexão do membro superior ao nível do cotovelo, padrão
                predominante normal
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("3")}>
              <ActionLabel>
                3 - Flexão do membro superior ao nível do cotovelo, padrão
                predominante claramente anormal
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("2")}>
              <ActionLabel>
                2 - Extensão do membro superior ao nível do cotovelo
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("1")}>
              <ActionLabel>
                1 - Ausência de movimento dos membros superiores/inferiores, sem
                fatores de interferência
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("0")}>
              <ActionLabel>NT - Fator que limita resposta motora</ActionLabel>
            </Action>
          </Actions>
        </Wrapper>
      </Header>
    </HeaderContainer>
    <AdMobBanner
    style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-6000091467232844/4391755126" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
  onDidFailToReceiveAdWithError={this.bannerError} />
  </>
  );
}
