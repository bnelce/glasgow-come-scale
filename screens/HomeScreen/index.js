import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  AdMobBanner,
} from 'expo-ads-admob';
import {
  Wrapper,
  BannerContainer,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
} from "./styles";

import Tips from "../../components/Tips";

export default function HomeScreen({ navigation }) {

  // Set global test device ID
  const device = async () => { await setTestDeviceIDAsync('EMULATOR');}

  const handleButton1 = () => {
    navigation.navigate("AO");
  };

  return (
    <>
    <Wrapper>
      <Header colors={["#285ECD", "#3D3AAA"]}>
        <HeaderContainer>
          <Title>Nova</Title>
          <BalanceContainer>
            <Value>
              <Bold>Escala de Glasgow</Bold>
            </Value>
          </BalanceContainer>
          <Info>Inicie o protocolo no botão abaixo</Info>
          <Actions>
            <Action onPress={handleButton1}>
              <FontAwesome name="male" size={30} color="#fff" />
              <ActionLabel>Adulto</ActionLabel>
            </Action>
            {/*<Action>
              <FontAwesome name="child" size={20} color="#fff" />
              <ActionLabel>Infantil</ActionLabel>
            </Action>*/}
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Informações</PaymentMethodsTitle>
      </PaymentMethods>
      <Tips navigation={navigation} />              
    </Wrapper>
    <AdMobBanner
    style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-6000091467232844/4391755126" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
  onDidFailToReceiveAdWithError={this.bannerError} />
  </>    
  );
}
