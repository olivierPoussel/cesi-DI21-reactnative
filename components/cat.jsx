import React from 'react'
import {Text, Image, View} from 'react-native'

const Cat = ({name, toto}) => {
    console.log(name,toto)
    return (
        <View>
            <Image source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                width: 90,
                height: 90
            }} />
            <Text>Le chat de {name}</Text>
        </View>
    )
}

export default Cat