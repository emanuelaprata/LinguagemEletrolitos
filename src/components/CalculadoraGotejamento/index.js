import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CalculadoraGotejamento() {
    const [tempoVolumeInfusao, settempoVolumeInfusao] = useState(0);
    const [tempofrequenciaGotejamento, settempofrequenciaGotejamento] = useState(0);
    const [tempoDeInfusao, settempoDeInfusao] = useState(0);

    const [frequenciaVolumeInfusao, setfrequenciaVolumeInfusao] = useState(0);
    const [frequenciaTempo1, setfrequenciaTempo1] = useState(0);
    const [frequenciaTempo2, setfrequenciaTempo2] = useState(0);
    const [frequenciaResultado, setfrequenciaResultado] = useState(0);

    const UM_ML_EM_GOTAS = 20

    const [emHoras, setemHoras] = useState(false);

    function calcularTempo() {
        let tempo

        if (emHoras) {
            tempo = tempoVolumeInfusao * UM_ML_EM_GOTAS / tempofrequenciaGotejamento
            if (isNaN(tempo) || !isFinite(tempo)) {
                tempo = "00:00"
            } else {
                tempo = Math.floor(tempo)
                const hora = Math.floor(tempo / 60)
                const minuto = tempo - (hora * 60)
                tempo = hora + ':' + minuto
            }
        } else {
            tempo = tempoVolumeInfusao * 20 / tempofrequenciaGotejamento

            if (isNaN(tempo) || !isFinite(tempo)) {
                tempo = 0
            } else {
                tempo = tempo.toFixed(0)
            }
        }

        settempoDeInfusao(tempo)
    }

    function calcularFrequencia() {
        let res

        if (emHoras) {
            res = frequenciaVolumeInfusao * 20 / ((frequenciaTempo1 * 60) + frequenciaTempo2)
        } else {
            res = frequenciaVolumeInfusao * 20 / frequenciaTempo1
        }

        if (isNaN(res) || !isFinite(res)) res = 0

        setfrequenciaResultado(res.toFixed(0))
    }

    useEffect(() => {
        calcularTempo()
    }, [emHoras, tempoVolumeInfusao, tempofrequenciaGotejamento])

    useEffect(() => {
        calcularFrequencia()
    }, [emHoras, frequenciaVolumeInfusao, frequenciaTempo1, frequenciaTempo2])

    return (
        <View style={{ alignItems: "center" }}>
            <View style={{ ...styles.row, marginBottom: 5 }}>
                <TouchableOpacity onPress={() => { setemHoras(true) }}>
                    <CheckBox
                        title="Horas"
                        checked={emHoras}
                        containerStyle={{ backgroundColor: "#fff" }}
                        onPress={() => { setemHoras(true) }}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setemHoras(false) }}>
                    <CheckBox
                        title="Minutos"
                        checked={!emHoras}
                        containerStyle={{ backgroundColor: "#fff" }}
                        onPress={() => { setemHoras(false) }}
                    />
                </TouchableOpacity>
            </View>

            <Text style={{ ...styles.headerTitle, marginTop: 25 }}>Calcular tempo de gotejamento</Text>

            <View style={styles.row}>
                <Text>Se temos </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={settempoVolumeInfusao}
                    value={tempoVolumeInfusao}
                    placeholder="0"
                    keyboardType="numeric"
                />

                <Text>mL para realizar a infusão</Text>
            </View>

            <View style={styles.row}>
                <Text>a </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={settempofrequenciaGotejamento}
                    value={tempofrequenciaGotejamento}
                    placeholder="0"
                    keyboardType="numeric"
                />

                <Text>gts/min de medicamento</Text>
            </View>

            <View style={{ ...styles.row, marginTop: 5 }}>
                <Text>Levará <Text style={{ fontSize: 16 }}> {tempoDeInfusao} </Text> {emHoras ? "horas" : "minutos"} para concluir a infusão!</Text>
            </View>

            <Text style={{ ...styles.headerTitle, marginTop: 35 }}>Calcular frequencia de gotejamento</Text>

            <View style={styles.row}>
                <Text>Se temos </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setfrequenciaVolumeInfusao}
                    value={frequenciaVolumeInfusao}
                    placeholder="0"
                    keyboardType="numeric"
                />

                <Text>mL para realizar a infusão</Text>
            </View>

            <View style={styles.row}>
                <Text>em </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setfrequenciaTempo1}
                    value={frequenciaTempo1}
                    placeholder="00"
                    keyboardType="numeric"
                />

                <Text style={{
                    display: emHoras ? "flex" : "none"
                }}>:</Text>

                <TextInput
                    style={{ ...styles.input, display: emHoras ? "flex" : "none" }}
                    onChangeText={setfrequenciaTempo2}
                    value={frequenciaTempo2}
                    placeholder="00"
                    keyboardType="numeric"
                />

                <Text>{emHoras ? "horas" : "minutos"}</Text>
            </View>

            <View style={{ ...styles.row, marginTop: 5, marginBottom: 15 }}>
                <Text>Devemos utilizar <Text style={{ fontSize: 16 }}> {frequenciaResultado} </Text> gts/min</Text>
            </View>

            <Text>LEMBRETE: 1mL = 20 gotas; 1 gota = 3 microgotas.</Text>
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
    headerTitle: {
        color: '#3d3d3d',
        fontWeight: "600",
        fontFamily: 'Metropolis-Bold',
        fontSize: 16,
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
