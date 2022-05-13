import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React, {useState} from 'react'

const Register = () => {
    const [email, setemail] = useState('user2@ex.com')
    const [password, setpassword] = useState('user2')
    const [pseudo, setpseudo] = useState('user 2')
    const handlePress = async ()=> {
        const url = `http://192.168.1.11:3000/users?email=${email}`
        try {
            const checkEmail = await fetch(url).then((r)=> r.json())
            if(checkEmail.length === 0) {
                //ok
                const urlUser = `http://192.168.1.11:3000/users`
                const result = await fetch(urlUser,  {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'Application/json',
                                        'Accept': 'Application/json'
                                    },
                                    body: JSON.stringify({email, password, pseudo, admin: false})
                                }).then((r)=> r.json())
                console.log(result)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View>
            <TextInput
                value={email}
                onChangeText={setemail}
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
            
            <TextInput
                value={pseudo}
                onChangeText={setpseudo}
                placeholder='Peuso'
                keyboardType='default'
            />
            <Button title='Valider' onPress={handlePress} />
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})