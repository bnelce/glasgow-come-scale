import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResultScreen({navigation}) {
  const [ao, setAO] = useState('0');
  const [rv, setRV] = useState('0');
  const [rm, setRM] = useState('0');
  const [rp, setRP] = useState('0');
  const [total, setTotal] = useState('0');

  const getAO = async () => {
    try {
      const vAO = await AsyncStorage.getItem('@keyAO');
      const vRV = await AsyncStorage.getItem('@keyRV');
      const vRM = await AsyncStorage.getItem('@keyRM');
      const vRP = await AsyncStorage.getItem('@keyRP');

      setAO(vAO);
      setRV(vRV);
      setRM(vRM);
      setRP(vRP);

      const vTotal = parseInt(vAO) + parseInt(vRV) + parseInt(vRM) - parseInt(vRP);
      setTotal(vTotal);

    } catch(e) {
      // error reading value
      console.log(e);
    }
 }

 useEffect(() => {
  getAO();
}, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Resultado</Text>
      <Text>AO: {ao} </Text>
      <Text>RV: {rv}</Text>
      <Text>RM: {rm}</Text>
      <Text>RP: {rp}</Text>
      <Text>Total: {total}</Text>
    </View>
  );
}
