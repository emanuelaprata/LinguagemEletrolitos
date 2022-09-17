import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground, Image} from 'react-native';
import { Card, Icon } from "@rneui/themed";

import {
  useFonts,
  Raleway_200ExtraLight, Raleway_400Regular, Raleway_500Medium
} from '@expo-google-fonts/raleway'
import {AppLoading} from 'expo-app-loading'

export default function ListConteudo() {

  const [fontsLoaded] = useFonts({
    Raleway_200ExtraLight, Raleway_400Regular, Raleway_500Medium
})

if(!fontsLoaded) {
    <AppLoading/>
}

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack()
  }

  const [items, setItems] = React.useState(
    [
      { title: 'Valores plasmáticos normais dos principais eletrólitos em adultos', templateWeb: 'conteudo1', image: require('./assets/conteudo1.jpg') },
      { title: 'Diagnósticos de enfermagem', templateWeb: 'conteudo1', subtitulo: 'Aqui é o subtitulo', /*image: require('./assets/fv1.png')*/ },
      { title: 'Intervenções de enfermagem', templateWeb: 'conteudo1', subtitulo: 'Aqui é o subtitulo', /*image: require('./assets/fv1.png')*/ },
      { title: 'Sódio – Cloreto de sódio', templateWeb: 'conteudo1', subtitulo: 'Aqui é o subtitulo', /*image: require('./assets/fv1.png')*/ },
      { title: 'Potássio – Cloreto de potássio', templateWeb: 'conteudo1', subtitulo: 'Aqui é o subtitulo', /*image: require('./assets/fv1.png')*/ },
      { title: 'Cloreto – cloreto de sódio e cloreto de potássio', templateWeb: 'conteudo1', subtitulo: 'Aqui é o subtitulo', /*image: require('./assets/fv1.png')*/ },
      { title: 'Sódio – Cloreto de sódio', templateWeb: 'conteudo1', subtitulo: 'Aqui é o subtitulo', /*image: require('./assets/fv1.png')*/ },
      { title: 'Sódio – Cloreto de sódio', templateWeb: 'conteudo1', subtitulo: 'Aqui é o subtitulo', /*image: require('./assets/fv1.png')*/ },
    
    ]
  )

  return (

    <View style={styles.screen}>

     <View View style={styles.header}>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
          onPress={goBack}>
          <Icon name='home' type='feather' color='#fff' style={{marginLeft: 20}}/>
          <Text style={styles.headerText}>Home</Text>
        </TouchableOpacity>
      </View> 

      <View>
      <View style={styles.welcome}>
        <Text style={{fontFamily:'Raleway_500Medium', fontSize: 17, marginTop: 10}}>Bem-vindo(a), ao IvFluidos. </Text>
      </View>

      <View>
        <SafeAreaView>
          {items.map((item, i) => {
            return (
              // <Card style={styles.card}>
              <View key={i} style={styles.card}>
                  <TouchableOpacity onPress={(props) => {
                    navigation.navigate('EducativoDetail', item)
                  }}>
                    <View style={{ backgroundColor: item.code }}>
                      <Text style={styles.cardTitle}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
              </View>
              // </Card>
            )

          })}

        </SafeAreaView>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    backgroundColor: '#fafafa'
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingTop: 40,
    paddingVertical: 15,
    backgroundColor: '#CD0000',
  },
  headerText: {
    color: '#fff',
    fontSize: 17,
    marginStart: 16,
    fontWeight: '200',
    fontFamily: 'Raleway_500Medium'
  },
  welcome: {
    padding: null,
    margin: 30,
    alignItems: "flex-end",
    alignSelf: "center", 
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius:100,
},
  // card: {
  //   padding: 15,
  //   marginLeft: 10,
  //   marginRight: 10,
  //   marginTop: 15,
  //   borderRadius: 7,
  //   elevation: 1,
  //   shadowOffset: Card,
  //   backgroundColor: 'E1E0E0'
  // },
  card:{
    borderRadius: 5,
    margin: 12,
    elevation: 2,
    borderEndColor: '#484848',
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    shadowColor: '#484848',
    padding: 20,
    borderLeftColor: '#CD0000',
    borderLeftWidth: 6,
    //borderWidth: 0.2,

  },
  cardTitle: {
    fontSize: 17,
    margin: 10,
    fontFamily:'Raleway_500Medium',
    textAlign: 'center',
  },
  

});
