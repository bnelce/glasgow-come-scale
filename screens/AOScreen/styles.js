import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../constants/Colors";

export const Wrapper = styled.ScrollView`
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  flex: 1;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.light.buttonText};
  font-size: 16px;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: column;
  margin-top: 20px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(2, 135, 250, 0.6);
  border-radius: 5px;
  margin: 0 10px;
  margin-bottom: 20px;
`;

export const ActionLabel = styled.Text`
  color: ${colors.light.buttonText};
  font-size: 16px;
  margin: 10px;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Img = styled.Image`
  width: 60px;
`;
