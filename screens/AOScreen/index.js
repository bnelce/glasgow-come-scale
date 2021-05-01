import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
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

export default function AOScreen({ navigation }) {
  const [value, setValue] = useState("0");
  const { getItem, setItem } = useAsyncStorage("@keyAO");

  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setValue(newValue);
  };

  const handleButton1 = (vl) => {
    writeItemToStorage(vl);
    navigation.navigate("RV");
  };

  useEffect(() => {
    //readItemFromStorage();
  }, [value]);

  return (
    <>
    <HeaderContainer>
      <Header colors={["#ffffff", "#ffffff"]}>
        <Wrapper>
          <Actions>
            <Action onPress={() => handleButton1("4")}>
              <ActionLabel>
                4 - Olhos abertos previamente a estimulação
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("3")}>
              <ActionLabel>
                3 - Abertura ocular após a ordem em tom de voz normal ou alta
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("2")}>
              <ActionLabel>
                2 - Abertura ocular após a estimulação da extremidade dos dedos
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("1")}>
              <ActionLabel>
                1 - Ausência persistente de abertura ocular, sem fatores de
                interferência
              </ActionLabel>
            </Action>
            <Action onPress={() => handleButton1("0")}>
              <ActionLabel>NT - Olhos fechado devido a fator local</ActionLabel>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "transparent",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ffffff",
    borderBottomLeftRadius: 0,
  },
  buttonText: {
    margin: 10,
    fontSize: 16,
    color: "#fff",
  },
});
