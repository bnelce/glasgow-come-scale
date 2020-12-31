import React from 'react';
import { Share, Linking } from 'react-native';
import { Container, Option, Title, Img } from './styles'
import img10 from '../../assets/images/10.png'
import colors from '../../constants/Colors';
const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'Estou usando o app Nova Escala de Glasgow e me ajuda muito! Baixe em http://abneroliveira.eti.br/',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const onFeedback = () => {
  Linking.openURL(
    'http://abneroliveira.eti.br',
  );
}

export default function Tips({navigation}) {
  return (
    <Container>
      <Option bgColor={colors.light.bannerBackground}onPress={() => {navigation.navigate('InfoECG')}}>
        <Img source={img10} />
        <Title>O que é a escala de Glasglow?</Title>        
      </Option>
      <Option bgColor={colors.light.bannerBackground}onPress={() => {navigation.navigate('InfoUpdate')}}>
        <Img source={img10} />
        <Title>O que mudou?</Title>        
      </Option>
      <Option bgColor={colors.light.bannerBackground}onPress={onFeedback}>
        <Img source={img10} />
        <Title>Avalie o app, sua opnião é importante!</Title>        
      </Option>
      <Option bgColor={colors.light.bannerBackground}onPress={onShare}>
        <Img source={img10} />
        <Title>Gostou? Compartilhe o app!</Title>        
      </Option>

    </Container>
  )
}