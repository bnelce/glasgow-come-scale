import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/index';
import ResultScreen from './screens/ResultScreen';
import AOScreen from './screens/AOScreen';
import RVScreen from './screens/RVScreen';
import RMScreen from './screens/RMScreen';
import RPScreen from './screens/RPScreen';
import InfoECGScreen from './screens/InfoECGScreen';
import InfoUpdateScreen from './screens/InfoUpdateScreen';

import colors from './constants/Colors';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'Escala de Coma de Glasgow',
            headerStyle: {
              backgroundColor: '#091A7A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="AO" 
          component={AOScreen} 
          options={{
            title: 'Abertura Ocular',
            headerStyle: {
              backgroundColor: colors.light.tint,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="RV" 
          component={RVScreen} 
          options={{
            title: 'Resposta Verbal',
            headerStyle: {
              backgroundColor: colors.light.tint,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="RM" 
          component={RMScreen} 
          options={{
            title: 'Resposta Motora',
            headerStyle: {
              backgroundColor: colors.light.tint,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="RP" 
          component={RPScreen} 
          options={{
            title: 'Reatividade Pupilar',
            headerStyle: {
              backgroundColor: colors.light.tint,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />         
        <Stack.Screen 
          name="Resultado" 
          component={ResultScreen} 
          options={{
            title: 'Resultado',
            headerStyle: {
              backgroundColor: colors.light.tint,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name="InfoECG" 
          component={InfoECGScreen} 
          options={{
            title: 'O que é ECG?',
            headerStyle: {
              backgroundColor: colors.light.tint,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name="InfoUpdate" 
          component={InfoUpdateScreen} 
          options={{
            title: 'O que mudou?',
            headerStyle: {
              backgroundColor: colors.light.tint,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;