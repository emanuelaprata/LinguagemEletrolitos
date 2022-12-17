import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function CalculadoraRediluicao() {
    const [solucaoDisponivel, setsolucaoDisponivel] = useState(0);
    const [solutoDisponivel, setsolutoDisponivel] = useState(0);
    const [solutoPrescrito, setsolutoPrescrito] = useState(0);
    const [rediluicao, setrediluicao] = useState(0);

    function calcular() {
        const solutoEm1mL = solutoDisponivel / solucaoDisponivel
        let res = (solutoPrescrito * solucaoDisponivel) / solutoEm1mL
        if (isNaN(res) || !isFinite(res)) res = 0

        setrediluicao(res)
    }

    useEffect(() => {
        calcular()
    }, [solucaoDisponivel, solutoDisponivel, solutoPrescrito])

    return (
        <View style={{ alignItems: "center", marginTop: 15 }}>

            <View style={styles.row}>
                <Text style={{ marginVertical: 15 }}>Foi prescrito </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setsolutoPrescrito}
                    placeholder="x"
                    value={solutoPrescrito}
                    keyboardType="numeric"
                />

                <Text>(mg ou UI) do medicamento</Text>
            </View>

            <Text style={{ marginVertical: 15 }}>A concentração do medicamento disponível é:</Text>

            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    onChangeText={setsolutoDisponivel}
                    value={solutoDisponivel}
                    placeholder="30"
                    keyboardType="numeric"
                />

                <Text>(mg ou UI) /</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setsolucaoDisponivel}
                    value={solucaoDisponivel}
                    placeholder="10"
                    keyboardType="numeric"
                />

                <Text>mL</Text>
            </View>

            <Text style={{ marginVertical: 15 }}>Aspire 1mL do medicamento disponível e depois aspire 9mL do solvente adequado</Text>

            <View style={{ ...styles.row, marginTop: 5 }}>
                <Text>Depois aspire <Text style={{ fontSize: 16 }}> {Number(rediluicao).toFixed(2)} </Text> mL da rediluição para obter o valor prescrito!</Text>
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
