import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native';
import { Input } from '@rneui/base';
import Acordeon from '../../components/Acordeon';

export default function DetailConteudo(route) {

  const item = route.route.params;
  const navigation = useNavigation();

  const [calc1_ml, setCalc1_ml] = React.useState(0);
  const [calc1_mg, setCalc1_mg] = React.useState(0);
  const [calc1_expectedml, setCalc1_expectedml] = React.useState(0);
  const [calc1_expectedmg, setCalc1_expectedmg] = React.useState(0);

  function calc1(value, valueType) {
    if (valueType == "ml") {
      const res = (value * calc1_mg) / calc1_ml
      return res
    } else {
      const res = (value * calc1_ml) / calc1_mg
      return res
    }
  }

  function goBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={goBack} >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-between"
          }}>
            <Icon name='arrow-left' type='feather' color='white' style={{ marginLeft: 20 }} />
            <Text style={styles.headerText}>Calculadoras</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, flexDirection: 'column' }}>

        <Acordeon title="Quantidade de soluto na solução">
          <View style={{alignItems:"center"}}>
            <View style={styles.row}>

              <Text>Se em </Text>

              <TextInput
                style={styles.input}
                onChangeText={setCalc1_ml}
                value={calc1_ml}
                placeholder="10"
                keyboardType="numeric"
              />

              <Text>mL da solução</Text>
            </View>

            <View style={styles.row}>
              <Text>eu tenho </Text>

              <TextInput
                style={styles.input}
                onChangeText={setCalc1_mg}
                value={calc1_mg}
                placeholder="30"
                keyboardType="numeric"
              />

              <Text>mg de soluto</Text>
            </View>

            <View style={styles.row}>
              <Text>Logo em </Text>

              <TextInput
                style={styles.input}
                onChangeText={(value) => {
                  const res = calc1(value, "ml")
                  console.log(res);
                  setCalc1_expectedml(res)
                  setCalc1_expectedmg(value)
                }}
                placeholder="x"
                value={calc1_expectedmg}
                keyboardType="numeric"
              />
              <Text>ml de solução</Text>
            </View>

            <View style={{ ...styles.row, marginTop: 5 }}>
              <Text>Teremos: <Text style={{ fontSize: 16 }}> {Number(calc1_expectedml).toFixed(2)} </Text> mg de soluto!</Text>
            </View>
          </View>

        </Acordeon>

        <Acordeon title="Calcular solução">
          <Text>Calcular concentração:</Text>
          <Input keyboardType='numeric'></Input>
          <Input keyboardType='numeric'></Input>
        </Acordeon>

        <Acordeon title="Rediluição de medicamentos">
          <Text>Valor de referência</Text>

          <Input keyboardType='numeric'></Input>
          <Text> mL - </Text>
          <Input keyboardType='numeric'></Input>

          <Text>Valor esperado em</Text>
        </Acordeon>
      </View>
    </View >
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
