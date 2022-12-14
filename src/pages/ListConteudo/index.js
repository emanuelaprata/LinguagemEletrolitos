import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native';
import { Icon } from "@rneui/themed";

export default function ListConteudo() {

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack()
  }

  const [items, setItems] = React.useState(
    [
      { title: 'Valores plasmáticos normais dos principais eletrólitos em adultos', templateWeb: 'conteudo1' },
      { title: 'Diagnósticos de enfermagem', templateWeb: 'conteudo2', subtitulo: 'Aqui é o subtitulo' },
      { title: 'Intervenções de enfermagem', templateWeb: 'conteudo3', subtitulo: 'Aqui é o subtitulo' },
      { title: 'Sódio – Cloreto de sódio', templateWeb: 'conteudo4', subtitulo: 'Aqui é o subtitulo' },
      { title: 'Potássio – Cloreto de potássio', templateWeb: 'conteudo5', subtitulo: 'Aqui é o subtitulo' },
      { title: 'Cloreto – cloreto de sódio e cloreto de potássio', templateWeb: 'conteudo6', subtitulo: 'Aqui é o subtitulo' },
      { title: 'Cálcio – Gluconato de cálcio a 10% e cloreto de cálcio a 10%', templateWeb: 'conteudo7', subtitulo: 'Aqui é o subtitulo' },
      { title: 'Magnésio – Sulfato de magnésio', templateWeb: 'conteudo8', subtitulo: 'Aqui é o subtitulo' },
      { title: 'Fosfato – Fosfato de potássio', templateWeb: 'conteudo9', subtitulo: 'Aqui é o subtitulo' },
      { title: 'Dupla checagem da medicação seguindo os treze certos:', templateWeb: 'conteudo10', subtitulo: 'Aqui é o subtitulo' },
      { title: 'Referências', templateWeb: 'conteudo11', subtitulo: 'Aqui é o subtitulo' },
    ]
  )

  return (

    <View style={styles.screen}>

      <View View style={styles.header}>
        <TouchableOpacity
          onPress={goBack}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-between"
          }}>
            <Icon name='home' type='feather' color='white' style={{ marginLeft: 20 }} />
            <Text style={styles.headerText}>LINGUAGEM DOS ELETRÓLITOS</Text>
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
        <View>
          <TouchableOpacity style={styles.card} onPress={(props) => {
            navigation.navigate('Calculadoras')
          }}>
            <Icon
              name='divide-square'
              type='feather'
              color='#CD0000'
              style={{ margin: 15 }}
            />

            <View style={{
              flex: 1,
              flexGrow: 1,
              flexDirection: 'row',
            }}>
              <Text style={styles.cardTitle}>Calculadoras</Text>
            </View>
          </TouchableOpacity>
        </View>

        {items.map((item, i) => {
          return (
            <View key={i} >
              <TouchableOpacity style={styles.card} onPress={(props) => {
                navigation.navigate('DetailConteudo', item)
              }}>
                <Icon
                  name='book'
                  type='feather'
                  color='#CD0000'
                  style={{ margin: 15 }}
                />

                <View style={{
                  flex: 1,
                  flexGrow: 1,
                  flexDirection: 'row',
                }}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingTop: 60,
    paddingVertical: 15,
    backgroundColor: '#CD0000',
    borderColor: '#CD0000',
  },
  headerText: {
    color: 'white',
    fontSize: 17,
    marginStart: 15,
    fontWeight: 'bold',
  },
  welcome: {
    padding: null,
    margin: 30,
    alignItems: "flex-end",
    alignSelf: "center",
  },
  card: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 7,
    marginHorizontal: 12,
    marginTop: 12,
    borderColor: '#aaa',
    borderLeftColor: '#CD0000',
    borderLeftWidth: 4,
    borderWidth: 0.3,
  },
  cardTitle: {
    fontSize: 18,
    marginVertical: 30,
    fontWeight: '600',
    textAlign: 'left',
    flexWrap: "wrap",
    color: '#484848'
  },
});
