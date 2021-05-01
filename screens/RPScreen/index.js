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


export default function RPScreen({ navigation }) {
  const [value, setValue] = useState("0");
  const { getItem, setItem } = useAsyncStorage("@keyRP");

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
    navigation.navigate("Resultado");
  };

  return (
    <>
    <HeaderContainer>
      <Header colors={["#ffffff", "#ffffff"]}>
        <Wrapper>
          <Actions>
            <Action onPress={() => handleButton1("2")}>
              <ActionLabel>
                2 - Nenhuma reatividade em ambas as pupilas
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("1")}>
              <ActionLabel>
                1 - Sem reação em apenas uma das pupilas
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("0")}>
              <ActionLabel>
                0 - Caso as duas pupilas estejam funcionando normalmente
              </ActionLabel>
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
