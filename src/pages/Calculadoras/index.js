import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native'
import { Input } from '@rneui/base';
import Acordeon from '../../components/Acordeon';
import CalculadoraSoluto from "../../components/CalculadoraSoluto";
import CalculadoraSolvente from "../../components/CalculadoraSolvente";
import CalculadoraRediluicao from "../../components/CalculadoraRediluicao";
import CalculadoraGotejamento from "../../components/CalculadoraGotejamento";

export default function DetailConteudo(route) {
  const item = route.route.params;
  const navigation = useNavigation();

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
      <ScrollView
        overScrollMode='always'
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={{
          paddingBottom: 25
        }}
      >
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Acordeon title="Quantidade de soluto na solução">
            <CalculadoraSoluto />
          </Acordeon>

          <Acordeon title="Quantidade necessária de solução">
            <CalculadoraSolvente />
          </Acordeon>

          <Acordeon title="Gotejamento de soluções">
            <CalculadoraGotejamento />
          </Acordeon>

          <Acordeon title="Rediluição">
            <Text style={{ textAlign: "justify" }}>Rediluição é diluir mais ainda o medicamento, aumentando o volume do solvente (Água Destilada,
              SF, SG ou diluente para injeção), com o objetivo de obter dosagens pequenas, ou seja
              concentrações menores de soluto, porém com um volume que possa ser trabalhado
              (aspirado) com segurança.
              Utiliza-se a rediluição quando se necessita de doses bem pequenas, como as utilizadas
              em: neonatologia, pediatria e algumas clínicas especializadas.</Text>
            <CalculadoraRediluicao />
          </Acordeon>
        </View>
      </ScrollView>

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
