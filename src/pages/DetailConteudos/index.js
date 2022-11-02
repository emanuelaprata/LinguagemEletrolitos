import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native';

export default function DetailConteudo(route) {

  const item = route.route.params;
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack()
  }

  let source
  if (Platform.OS === 'ios') {
    let urlPath = 'file://templates/' + item.templateWeb + '/index.html'
    source = { uri: urlPath }
  } else {
    let urlPath = 'file:///android_asset/templates/' + item.templateWeb + '/index.html'
    source = { uri: urlPath }
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
            <Text style={styles.headerText}>Conteúdo Educativo</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, flexDirection: 'column' }}>
        <WebView source={source} />
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
  }
});
