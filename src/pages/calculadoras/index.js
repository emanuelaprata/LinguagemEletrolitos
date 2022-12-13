import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

export default function Calculadora() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [numero, setNumero] = useState(0)
    const x = parseFloat(numero);
    const resultado = x / 100 * 10


    return (

        <View style={styles.screen}>

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={goBack} >
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Icon name='arrow-left' type='feather' color='white' style={{ marginLeft: 20 }} />
                        <Text style={styles.headerText}>Calculadoras</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={styles.container}>
                <Text style={styles.Titulo}>O que é o dízimo?</Text>

                <Text style={styles.Text}>A palavra dízimo significa “a décima parte”. O dízimo é uma doação, ou oferta, de um décimo de sua renda para o serviço de Deus. Desde a antiguidade, Deus ordenou a Seu povo que desse um décimo de tudo o que ganhasse de volta a Ele.</Text>

                <Text style={styles.Titulo}>Calcule o seu dízimo:</Text>

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TextInput
                        placeholder="Informe o valor do seu salário"
                        placeholderTextColor="white"
                        color='white'
                        returnKeyType='done'
                        keyboardType="numeric"
                        value={numero.toString().replace(',', '.')}
                        onChangeText={setNumero}
                        style={styles.Input}
                    />
                </KeyboardAvoidingView>

                <Text style={{ color: '#C8C8C8', fontSize: 20 }}>O valor do seu dízimo é: R$ {resultado}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: "flex",
        backgroundColor: 'black',
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 50,
        paddingVertical: 15,
        backgroundColor: '#CD0000',
        borderColor: '#CD0000',
        borderBottomWidth: 4,
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        marginStart: 10,
        fontWeight: 'bold',
    },
    Titulo: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        color: '#EECC2D',
        marginTop: 25,
    },
    Text: {
        fontSize: 18,
        margin: 5,
        textAlign: 'justify',
        color: '#C8C8C8',
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        backgroundColor: 'black',
    },
    Input: {
        margin: 20,
        fontSize: 20,
        padding: 10,
        borderRadius: 2,
        backgroundColor: '#151515',
        borderColor: '#EECC2D',
        borderBottomWidth: 2,
        textAlign: 'center'
    },
});