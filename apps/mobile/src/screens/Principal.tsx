import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import Home from './Home'
import Agendamento from './Agendamento'
import Usuario from './Usuario'
import Icone from '../components/shared/Icone'

const Tab = createBottomTabNavigator()

export default function Principal({ navigation }: any) {
  function tab(nome: string, componente: any, label: string, icone: string) {
    return (
      <Tab.Screen
        name={nome}
        component={componente}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabScreen}>
              <Icone
                nome={icone as any}
                tamanho={24}
                color={focused ? '#29A7EA' : '#9DA2AE'}
              />
              <Text
                style={{
                  ...styles.tabScreenText,
                  color: focused ? '#29A7EA' : '#9DA2AE',
                }}
              >
                {label}
              </Text>
            </View>
          ),
        }}
      />
    )
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#222',
        tabBarInactiveBackgroundColor: '#222',
        tabBarStyle: {
          backgroundColor: '#222',
        },
      }}
    >
      {tab('Home', Home, 'Home', 'home-outline')}
      {tab('Agendamento', Agendamento, 'Agendamento', 'calendar-outline')}
      {tab('Usuario', Usuario, 'Usuário', 'person-outline')}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabScreen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabScreenText: {
    fontSize: 10,
  },
})
