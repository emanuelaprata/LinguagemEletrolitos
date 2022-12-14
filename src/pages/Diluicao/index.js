import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

export default function CalculadoraDiluicao() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [diluente, setDiluente] = useState(0)
    const [aliquota, setAliquota] = useState(0)
    const [volumeTotal, setVolumeTotal] = useState(0)
    const x = parseFloat(diluente);
    const y = parseFloat(aliquota)
    const z = parseFloat(volumeTotal)
    const resultado = x*y/z


    return (

        <View style={styles.screen}>

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={goBack} >
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Icon name='arrow-left' type='feather' color='white' style={{ marginLeft: 20 }} />
                        <Text style={styles.headerText}>Diluição de Medicamentos</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={styles.container}>

                <Text>Diluente</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TextInput
                        placeholder="Informe o valor do seu salário"
                        placeholderTextColor="white"
                        color='black'
                        returnKeyType='done'
                        keyboardType="numeric"
                        value={diluente.toString().replace(',', '.')}
                        onChangeText={setDiluente}
                        style={styles.Input}
                    />
                </KeyboardAvoidingView>

                <Text>Solvente</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TextInput
                        placeholder="Informe o valor do seu salário"
                        placeholderTextColor="white"
                        color='black'
                        returnKeyType='done'
                        keyboardType="numeric"
                        value={aliquota.toString().replace(',', '.')}
                        onChangeText={setAliquota}
                        style={styles.Input}
                    />
                </KeyboardAvoidingView>

                <Text>Volume total</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TextInput
                        placeholder="Informe o valor do seu salário"
                        placeholderTextColor="white"
                        returnKeyType='done'
                        keyboardType="numeric"
                        value={volumeTotal.toString().replace(',', '.')}
                        onChangeText={setVolumeTotal}
                        style={styles.Input}
                    />
                </KeyboardAvoidingView>

                <Text style={{ color: 'black', fontSize: 20 }}>Resultado é: {resultado}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: "flex",
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
        justifyContent: 'center'
    },
    Input: {
        margin: 20,
        fontSize: 20,
        padding: 10,
        borderRadius: 2,
        borderColor: '#EECC2D',
        borderBottomWidth: 2,
        textAlign: 'center'
    },
});