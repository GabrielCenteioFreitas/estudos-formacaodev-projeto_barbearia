import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProvedorAgendamento } from './data/contexts/ContextoAgendamento'
import { ProvedorUsuario } from './data/contexts/ContextoUsuario'
import Cadastro from './screens/Cadastro'
import Principal from './screens/Principal'
import Sumario from './screens/Sumario'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ProvedorUsuario>
      <ProvedorAgendamento>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Cadastro'
              component={Cadastro}
              options={{
                headerShown: false 
              }}
            />
          </Stack.Navigator>

          <Stack.Navigator>
            <Stack.Screen
              name='Sumario'
              component={Sumario}
              options={{
                headerShown: false 
              }}
            />
          </Stack.Navigator>

          <Stack.Navigator>
            <Stack.Screen
              name='Principal'
              component={Principal}
              options={{
                headerShown: false 
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProvedorAgendamento>
    </ProvedorUsuario>
  )
}

