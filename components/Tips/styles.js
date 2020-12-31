import styled from 'styled-components/native';
import colors from '../../constants/Colors';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  }
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  background: ${colors.light.bannerBackground};
  width: 150px;
  height: 150px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Title = styled.Text`
  color: ${colors.light.bannerText};
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;

