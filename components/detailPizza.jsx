import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const DetailPizza = ({navigation, route}) => {
    const pizza = route.params.pizza
  return (
    <View>
        <Image source={{uri: pizza.imageUrl, width:90, height:90}} />
        <Text>{pizza.nom}</Text>
        <Text>{pizza.prix}€</Text>
        <Text>Liste des ingrédients</Text>
        <View style={{borderWidth: 1, borderColor: 'grey', alignItems: 'center'}}>
            {
                pizza.ingredients.map((ingredient, indexTab)=> {
                    return (
                        <Text key={indexTab}>{ingredient}</Text>
                    )
                })
            }
        </View>
    </View>
  )
}

export default DetailPizza

const styles = StyleSheet.create({})