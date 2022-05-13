import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_KEY = "user"

/**
 * StoreData
 * @param {string} key 
 * @param {*} value 
 */
export async function storeData(key, value) {
    
    try {
        const stringValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, stringValue)
    } catch (error) {
        console.log(error)
    }

    return true
}

/**
 * getData
 * @param {string} key 
 * @returns {string|object|undefined}
 */
export async function getData(key) {
    try {
        const stringValue = await AsyncStorage.getItem(key)
        const user = JSON.parse(stringValue)

        return user
    } catch (error) {
        console.log(error)
    }
}