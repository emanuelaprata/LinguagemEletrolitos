import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Card , Icon} from "@rneui/themed";


export default function ListConteudo() {

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack()
  }

  const [items, setItems] = React.useState(
    [
      { title: 'Valores plasmáticos normais dos principais eletrólitos em adultos', templateWeb: 'conteudo1', image: require('./assets/fv1.png') },
      { title: 'Titulo aqui', templateWeb: 'conteudo1', subtitulo: 'Aqui é o subtitulo', image: require('./assets/fv1.png') }
    ]
  )

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />

        <View View style={styles.header}>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between" }}
            onPress={goBack}>
            <Icon name='home' type='feather' color='#fff' />
            <Text style={styles.headerText}>Home</Text>
          </TouchableOpacity>
        </View>

      <View>
        <SafeAreaView >
          {items.map((item, i) => {
            return (
              <Card>
                <View key={i} style={styles.user}>
                  <ImageBackground
                    blurRadius={2}
                    source={item.image}
                    style={{ ...styles.ImageBackground }}>
                    <TouchableOpacity onPress={(props) => {
                      navigation.navigate('EducativoDetail', item)
                    }}>
                      <View style={{ ...styles.cardContainer, backgroundColor: item.code }}>
                        <Card.Title>{item.title}</Card.Title>
                        <Text style={{ ...styles.cardSubtitle, display: !!item.subtitle ? 'flex' : 'none' }}>{item.subtitle}</Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </Card>
            )

          })}

          {/* <FlatGrid
            itemDimension={130}
            style={styles.gridView}
            spacing={10}
            data={items}
            renderItem={({ item }) => (
              <ImageBackground
                blurRadius={2}
                source={item.image}
                style={{ ...styles.ImageBackground }}>
                <TouchableOpacity onPress={(props) => {
                  navigation.navigate('EducativoDetail', item)
                }}>
                  <View style={{ ...styles.cardContainer, backgroundColor: item.code }}>
                    <Text style={{ ...styles.cardTitle }}>{item.title}</Text>
                    <Text style={{ ...styles.cardSubtitle, display: !!item.subtitle ? 'flex' : 'none' }}>{item.subtitle}</Text>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            )}
          /> */}
        </SafeAreaView>
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
  padding: 14,
  backgroundColor: '#5258FC',
},
headerText: {
  color: '#fff',
  fontSize: 16,
  marginStart: 16,
  fontFamily: 'Metropolis-Bold',
},
});
