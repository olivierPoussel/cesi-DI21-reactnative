import { StyleSheet, Image, Text, View, SafeAreaView, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PizzaList from './components/pizzaList';
import DetailPizza from './components/detailPizza';

const Stack = createNativeStackNavigator();
const Profil = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function PizzaStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='PizzaDetail' component={DetailPizza} />
      <Stack.Screen name='Home' component={PizzaList} />
    </Stack.Navigator>
  )
}

function ProfilStack() {
  return (
    <Profil.Navigator>
      <Profil.Screen name='login' component={()=> <Text>Login</Text>} />
    </Profil.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Pizza' component={PizzaStack} />
        <Tab.Screen name='Profil' component={ProfilStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


