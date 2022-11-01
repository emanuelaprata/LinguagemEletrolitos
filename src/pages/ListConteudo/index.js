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
      { title: 'Valores plasmáticos normais dos principais eletrólitos em adultos', templateWeb: 'conteudo1', image: require('./assets/conteudo1.jpg') },
      { title: 'Diagnósticos de enfermagem', templateWeb: 'conteudo2', subtitulo: 'Aqui é o subtitulo', image: require('./assets/conteudo2.jpg') },
      { title: 'Intervenções de enfermagem', templateWeb: 'conteudo3', subtitulo: 'Aqui é o subtitulo', image: require('./assets/conteudo3.jpg') },
      { title: 'Sódio – Cloreto de sódio', templateWeb: 'conteudo4', subtitulo: 'Aqui é o subtitulo', image: require('./assets/conteudo4.jpg') },
      { title: 'Potássio – Cloreto de potássio', templateWeb: 'conteudo5', subtitulo: 'Aqui é o subtitulo', image: require('./assets/conteudo5.jpg') },
      { title: 'Cloreto – cloreto de sódio e cloreto de potássio', templateWeb: 'conteudo6', subtitulo: 'Aqui é o subtitulo', image: require('./assets/conteudo4.jpg') },
      { title: 'Cálcio – Gluconato de cálcio a 10% e cloreto de cálcio a 10%', templateWeb: 'conteudo7', subtitulo: 'Aqui é o subtitulo', image: require('./assets/conteudo5.jpg') },
      { title: 'Magnésio – Sulfato de magnésio', templateWeb: 'conteudo8', subtitulo: 'Aqui é o subtitulo', image: require('./assets/conteudo4.jpg') },
      { title: 'Fosfato – Fosfato de potássio', templateWeb: 'conteudo9', subtitulo: 'Aqui é o subtitulo', image: require('./assets/conteudo5.jpg') },
      { title: 'Dupla checagem da medicação seguindo os treze certos:', templateWeb: 'conteudo10', subtitulo: 'Aqui é o subtitulo', image: require('./assets/conteudo4.jpg') },
      { title: 'Referências', templateWeb: 'conteudo11', subtitulo: 'Aqui é o subtitulo', image: require('./assets/conteudo7.jpg') },
    ]
  )

  return (

    <View style={styles.screen}>

      <View View style={styles.header}>
        <TouchableOpacity 
          onPress={goBack}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <Icon name='home' type='feather' color='white' style={{ marginLeft: 20 }} />
          <Text style={styles.headerText}>LINGUAGEM DOS ELETRÓLITOS</Text>
          </View>
        </TouchableOpacity>
      </View>

          <ScrollView
            overScrollMode='always'

            style={{ backgroundColor: 'white' }}>
            {items.map((item, i) => {
              return (
                <View key={i} style={styles.card}>
                  <TouchableOpacity onPress={(props) => {
                    navigation.navigate('DetailConteudo', item)
                  }}>
                    <View style={{ backgroundColor: item.code }}>
                      <Text style={styles.cardTitle}>{i+1+'.'} {item.title}</Text>
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
    paddingTop: 50,
    paddingVertical: 15,
    backgroundColor: '#870202',
    borderColor: '#CD0000',
    //borderBottomWidth: 4,

  },
  headerText: {
    color: 'white',
    fontSize: 17,
    marginStart: 10,
    fontWeight: 'bold',

  },
  welcome: {
    padding: null,
    margin: 30,
    alignItems: "flex-end",
    alignSelf: "center",
  },
  card: {
    borderRadius: 7,
    margin: 12,
    elevation: 2,
    //borderEndColor: '#black',
    //borderLeftColor: '#CD0000',
    //borderLeftWidth: 4,
    backgroundColor: '#D7DBDD',
    //borderWidth: 0.4,
  },
  cardTitle: {
    fontSize: 18,
    marginLeft: 10,
    margin: 30,
    fontWeight:'600',
    textAlign: 'center',
  },
});
