import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useEffect, useState } from 'react';

export default function CalculadoraSolvente() {
    const [referenciaSolucao, setreferenciaSolucao] = useState(0);
    const [referenciaSoluto, setreferenciaSoluto] = useState(0);
    const [valorSolucao, setvalorSolucao] = useState(0);
    const [valorSoluto, setvalorSoluto] = useState(0);

    function calcular() {
        let res = (valorSoluto * referenciaSolucao) / referenciaSoluto
        if (isNaN(res) || !isFinite(res)) res = 0

        setvalorSolucao(res)
    }

    useEffect(() => {
        calcular()
    }, [referenciaSolucao, referenciaSoluto, valorSoluto])

    return (
        <View style={{ alignItems: "center" }}>
            <View style={styles.row}>

                <Text>Se em </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setreferenciaSolucao}
                    value={referenciaSolucao}
                    placeholder="10"
                    keyboardType="numeric"
                />

                <Text>mL da solução</Text>
            </View>

            <View style={styles.row}>
                <Text>eu tenho </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setreferenciaSoluto}
                    value={referenciaSoluto}
                    placeholder="30"
                    keyboardType="numeric"
                />

                <Text>mg de soluto</Text>
            </View>

            <View style={styles.row}>
                <Text>Logo para ter </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setvalorSoluto}
                    placeholder="x"
                    value={valorSoluto}
                    keyboardType="numeric"
                />
                <Text>mg de soluto</Text>
            </View>

            <View style={{ ...styles.row, marginTop: 5 }}>
                <Text>Precisamos de: <Text style={{ fontSize: 16 }}> {Number(valorSolucao).toFixed(2)} </Text> mL de solução!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen: {
        flex: 1,
        display: "flex",
        backgroundColor: '#fafafa'
    },
    screenContent: {
        flex: 1
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
    ImageBackground: {
        flex: 1,
        width: null,
        height: null
    },
    input: {
        height: 40,
        minWidth: 40,
        margin: 5,
        borderBottomWidth: 1,
        borderColor: "#c3c3c3",
        padding: 10,
    },
    cardContainer: {
        flex: 1,
        height: 150,
        paddingStart: 15,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        color: '#fff',
        fontSize: 21,
    },
    cardSubtitle: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5
    },
    cardDetailContainer: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: "center",
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
