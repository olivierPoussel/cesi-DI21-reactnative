import { View, Text,SafeAreaView,FlatList, Pressable,Image,StyleSheet  } from 'react-native'
import React from 'react'
const pizzas = require('../data/pizzas.json')

const PizzaList = ({navigation}) => {

    const handlePress = (pizza) => {
        navigation.navigate('PizzaDetail', {pizza})
    }

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={pizzas}
      renderItem={({ item, index, separators }) => (
        <Pressable onPress={() => handlePress(item)}>
          <View key={index} style={{ flexDirection: 'row' }}>
            <Image source={{ uri: item.imageUrl, width: 50, height: 50 }} />
            <Text style={{ marginLeft: 10, marginTop: 20 }}>{item.nom}</Text>
            <Text style={{ marginLeft: 5, marginTop: 20 }}>{item.prix}€</Text>
          </View>
        </Pressable>
      )
      }
    />
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default PizzaList