import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Icon } from "@rneui/themed";

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.viewHolder}>
                <StatusBar style="auto" />

                <Image source={require('../../../assets/images/i.gif')}
                    style={{ width: 250, height: 250 }} />

                <Text style={styles.textWarning}>
                    Com este aplicativo você pode aprender em qualquer lugar e a qualquer hora.
                    Não é um tratado sobre o assunto, mas é uma solução simples para informar.
                    Não pretendemos, de forma alguma, substituir as orientações de um profissional
                    médico ou servir como recomendação para qualquer tipo de tratamento.
                </Text>

                <TouchableOpacity style={styles.button}
                    onPress={(props) => { navigation.navigate('ListConteudo') }}>
                    <View style={styles.view} >
                        <Text style={{ color: 'white', marginEnd: 10, fontSize: 15 }}>Continuar</Text>
                        <Icon name='arrow-right' type='feather' color='#fff' />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textWarning: {
        fontSize: 18,
        fontWeight: '400',
        color: '#484848',
        padding: 40,
        textAlign: 'center',
        alignItems: 'center',
    },
    viewHolder: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: '#CD0000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 180,
        padding: 0,
        borderRadius: 100,
    },

});