import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Wrapper,
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
  const handleButton1 = () => {
    navigation.navigate("AO");
  };

  return (
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
        <UseBalanceTitle />
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Informações</PaymentMethodsTitle>
      </PaymentMethods>
      <Tips navigation={navigation} />
    </Wrapper>
  );
}
