import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('./assets/warning.png')}
                style={{ width: 300, height: 300 }}/>
            <Text style={styles.textWarning}>
                Com este aplicativo você pode aprender em qualquer lugar e a qualquer hora. Não é um tratado sobre o assunto, mas é uma solução simples para informar, não pretendendo, de forma alguma, substituir as orientações de um profissional médico ou servir como recomendação para qualquer tipo de tratamento.
                </Text>
            <StatusBar style="auto" />

            <TouchableOpacity style={styles.button}
                onPress={(props) => { navigation.navigate('ListConteudo') }}>
                <View>
                <Text style={styles.textButton}>Continuar</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textWarning: {
        padding: 50,
        textAlign: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#5258FC',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, 
        width: 250,
        padding: 20,
        borderRadius: 30,
    },
    textButton: {
        color: 'white',
        
    }
});