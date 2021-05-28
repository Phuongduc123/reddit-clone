import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorage = async (key,value) => {
  try {
    await AsyncStorage.setItem(key , value);
  } catch (error) {
    throw error
  }
};

export const getStorage = async key => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (!!value) {
            // We have data!!
            return value
        }else return "no data"
    } catch (error) {
        // Error retrieving data
        throw error
    }
}
