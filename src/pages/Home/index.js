import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Card, Icon } from "@rneui/themed";

import {
    useFonts,
    Raleway_200ExtraLight, Raleway_400Regular, Raleway_500Medium
} from '@expo-google-fonts/raleway'
import {AppLoading} from 'expo-app-loading'

export default function Home() {

    const [fontsLoaded] = useFonts({
        Raleway_200ExtraLight, Raleway_400Regular, Raleway_500Medium
    })

    if(!fontsLoaded) {
        <AppLoading/>
    }

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('./assets/i.gif')}
                style={{ width: 200, height: 200, marginTop: 80 }}/>
            <Text style={styles.textWarning}>
                Com este aplicativo você pode aprender em qualquer lugar e a qualquer hora. Não é um tratado sobre o assunto, mas é uma solução simples para informar, não pretendendo, de forma alguma, substituir as orientações de um profissional médico ou servir como recomendação para qualquer tipo de tratamento.
                </Text>
            <StatusBar style="auto" />

            <TouchableOpacity style={styles.button}
                onPress={(props) => { navigation.navigate('ListConteudo') }}>
                <View style={styles.view} >
                <Text style={{color: 'white', marginEnd: 10, fontSize: 15, fontFamily: "Raleway_500Medium"}}>Continuar</Text>
                <Icon name='arrow-right' type='feather' color='#fff'/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textWarning: {
        padding: 40,
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'Raleway_500Medium',
    },
    view: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
         justifyContent: "space-between"
    },
    button: {
        backgroundColor: '#FF5050',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, 
        width: 180,
        padding: 0,
        borderRadius: 100,
    },

});