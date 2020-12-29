//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

//zerar tudo
//setar cada um, toda vez que setar deve somar novamente no total
//get cada um


// zerar tudo na home, e na AO
// botoes da AO --> setValueAO
// botoes da RV --> setValueRV
// botoes da RM --> setValueRM
// botoes da RP --> setValueRP
// na tela de resultado getTotal no useEffect

const intitalStore = async () => {
    try {
      await AsyncStorage.setItem('@storage_KeyTotal', 0)
      await AsyncStorage.setItem('@storage_KeyAO', 0)
      await AsyncStorage.setItem('@storage_KeyRV', 0)
      await AsyncStorage.setItem('@storage_KeyRM', 0)
      await AsyncStorage.setItem('@storage_KeyRP', 0)
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

const calculate = async () => {
    try {
      const ao = await AsyncStorage.getItem('@storage_KeyAO');
      const rv = await AsyncStorage.getItem('@storage_KeyRV');
      const rm = await AsyncStorage.getItem('@storage_KeyRM');
      const rp = await AsyncStorage.getItem('@storage_KeyRP');
      const total = (ao + rv + rm - rp);
      await AsyncStorage.setItem('@storage_KeyTotal', total);
    } catch(e) {
      // error reading value
      console.log(e);
    }
}


const storeAO = async (value) => {
    try {
      const vl = await AsyncStorage.setItem('@storage_KeyAO', value);
      calculate();
      return vl;

    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  const storeRV = async (value) => {
    try {
      const vl = await AsyncStorage.setItem('@storage_KeyRV', value);
      calculate();
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  const storeRM = async (value) => {
    try {
      const vl = await AsyncStorage.setItem('@storage_KeyRM', value);
      calculate();
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  const storeRP = async (value) => {
    try {
      const vl = await AsyncStorage.setItem('@storage_KeyRP', value);
      calculate();
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  
const getTotal = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_KeyTotal')
      return value
    } catch(e) {
      // error reading value
    }
  }

const getAO = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_KeyAO')
      return value
    } catch(e) {
      // error reading value
      console.log(e);
    }
 }

const getRV = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_KeyRV')
      return value
    } catch(e) {
      // error reading value
      console.log(e);
    }
 }

 const getRM = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_KeyRM')
      return value
    } catch(e) {
      // error reading value
      console.log(e);
    }
 }

const getRP = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_KeyRP')
      return value
    } catch(e) {
      // error reading value
      console.log(e);
    }
 }

module.exports = {
    intitalStore,
    storeAO,
    storeRV,
    storeRM,
    storeRP,
    getAO,
    getTotal,
    getRM,
    getRP,
    getRV
}