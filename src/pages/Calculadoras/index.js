import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native'
import Diluicao from '../Diluicao';
import CalculadoraDiluicao from '../Diluicao';

export default function Calculadoras() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

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

                <View style={styles.Input}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('CalculadoraDiluicao', CalculadoraDiluicao)
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                            <Text style={styles.headerText}>Diluição de Medicamentos</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.Input}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Calculadoras', Calculadoras)
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                            <Text style={styles.headerText}>Rediluição de Medicamentos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: '#870202',
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        marginStart: 10,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center'
    },
    Input: {
        margin: 20, 
        padding: 15, 
        textAlign: 'center', 
        backgroundColor: '#CD0000', 
        borderRadius: 20
    },
});