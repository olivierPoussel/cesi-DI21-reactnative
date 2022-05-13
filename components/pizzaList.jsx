import { View, Text,SafeAreaView,FlatList, Pressable,Image,StyleSheet, TextInput, Button  } from 'react-native'
import { useState, useEffect } from 'react'

const PizzaList = ({navigation}) => {
    const [search, setSearch] = useState()
    const [pizzas, setPizzas] = useState()
    const [pizzaView, setPizzaView] = useState()

    useEffect(()=> {
      fetch('http://192.168.1.11:3000/pizzas')
        .then((response) => response.json())
        .then((data) => {
          setPizzas(data)
          setPizzaView(data)
        })
    }, [])

    const handlePress = (pizza) => {
        navigation.navigate('PizzaDetail', {pizza})
    }

    const handleSearch = () => {
      // let result = []
      // pizzas.forEach((pizza, index) => {
      //   // console.log(search, pizza.nom, pizza.nom.toLowerCase().includes(search.toLowerCase()))
      //   if(pizza.nom.toLowerCase().includes(search.toLowerCase())) {
      //     result.push(pizza)
      //   }
      // })

      // console.log(result)

      // const resultMap = pizzas.map(pizza=> {
      //   if (pizza.nom.toLowerCase().includes(search.toLowerCase())) {
      //     return pizza
      //   }
      // })
      // console.log(resultMap);
      
      const resultFilter = pizzas.filter(pizza => pizza.nom.toLowerCase().includes(search.toLowerCase()))
      // console.log(resultFilter);
      setPizzaView(resultFilter)
    }


  return (
    <SafeAreaView style={styles.container}>
      {/* {console.log(pizzaView)} */}
      <TextInput 
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />
      <Button title='Rechercher' onPress={handleSearch} />

      <FlatList
        data={pizzaView}
        renderItem={({ item, index, separators }) => (
          <Pressable key={index} onPress={() => handlePress(item)}>
            <View  style={{ flexDirection: 'row' }}>
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
    },
    input: {
      height: 80,
      width: '100%',
      borderWidth: 2,
      borderColor: 'black'
    }
  });

export default PizzaList