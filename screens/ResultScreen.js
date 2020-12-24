import React from 'react';
import { View, Text } from 'react-native';

export default function ResultScreen({route}) {
//  const { men, women, childs} = route.params.people;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Resultado</Text>
    </View>
  );
}
