import { StyleSheet, Image, Text, View, SafeAreaView, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PizzaList from './components/pizzaList';
import DetailPizza from './components/detailPizza';
import Login from './components/login';
import { getData, USER_KEY } from './service/storageService';
import Register from './components/register';

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
    <Profil.Navigator initialRouteName='register'>
      <Profil.Screen name='register' component={Register} />
      <Profil.Screen name='login' component={Login} />
    </Profil.Navigator>
  )
}


getData(USER_KEY).then((data) => console.log(data))

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


