import { StyleSheet, TextInput, View, Button } from 'react-native'
import React, {useState} from 'react'
import { storeData, USER_KEY } from '../service/storageService'

const Login = ({navigation}) => {
    const [login, setlogin] = useState('user@ex.com')
    const [password, setpassword] = useState('user')

    const handlePress = () => {
        console.log(login, password);
        const url = `http://192.168.1.11:3000/users?email=${login}&password=${password}`
        fetch(url)
        .then((response)=> response.json())
        .then((data) => {
            if(data.length === 1) {
                //enregistrer l'utilisateur dans le localStorge du téléphone
                storeData(USER_KEY, data[0]).then((data)=> console.log(data))
                navigation.navigate('Pizza')
            }else {
                //message d'erreur
            }
        })
    }
  return (
    <View>
      <TextInput
        value={login}
        onChangeText={setlogin}
        placeholder='Email'
        keyboardType='email-address'
      />
      <TextInput
        value={password}
        onChangeText={setpassword}
        placeholder='Mot de passe'
        keyboardType='default'
        secureTextEntry={true}
      />
      <Button title='Connexion' onPress={handlePress} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})