import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native';
import { Icon } from "@rneui/themed";

// import {
//   useFonts,
//   Raleway_200ExtraLight, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold
// } from '@expo-google-fonts/raleway'
// import {AppLoading} from 'expo-app-loading'
// import { Jost_300Light } from '@expo-google-fonts/jost';

export default function ListConteudo() {

  //   const [fontsLoaded] = useFonts({
  //     Raleway_200ExtraLight, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold
  //    })

  // if(!fontsLoaded) {
  //     <AppLoading/>
  // }

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
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
          onPress={goBack}>
          <Icon name='home' type='feather' color='white' style={{ marginLeft: 20 }} />
          <Text style={styles.headerText}>LINGUAGEM DOS ELETRÓLITOS</Text>
        </TouchableOpacity>
      </View>

          <ScrollView
            overScrollMode='always'

            style={{ backgroundColor: 'white' }}>
            {items.map((item, i) => {
              return (
                <View key={i} style={styles.card}>
                  {/* <ImageBackground
                                blurRadius={2.5}
                                source={item.image}
                                style={{ ...styles.ImageBackground }}> */}
                  <TouchableOpacity onPress={(props) => {
                    navigation.navigate('DetailConteudo', item)
                  }}>
                    <View style={{ backgroundColor: item.code }}>
                      <Text style={styles.cardTitle}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                  {/* </ImageBackground> */}
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
    backgroundColor: '#CD0000',
    borderColor: '#CD0000',
    borderBottomWidth: 4,

  },
  headerText: {
    color: 'white',
    fontSize: 17,
    marginStart: 10,
    fontWeight: 'bold',
    marginTop: 5
    // fontFamily: 'Raleway_500Medium'
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
    borderEndColor: '#black',
    borderLeftColor: '#CD0000',
    borderLeftWidth: 4,
    backgroundColor: '#FBFBFB',
    borderWidth: 0.4,
  },
  cardTitle: {
    fontSize: 18,
    // fontFamily: 'Raleway_600SemiBold',
    marginLeft: 10,
    margin: 30,
    fontWeight:'500',
  },
});
