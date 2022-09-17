import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function ListConteudo(route, navigation) {
    

  const item = route.params;

  function goBack() {
    navigation.goBack()
}

  const urlPath = 'file:///android_asset/templates/' + item.templateWeb + '/index.html'

  return (
    <View style={styles.screen}>
    <View style={styles.header}>
        <TouchableOpacity
            style={{ flexDirection: 'row', justifyContent: "space-between" }}
            onPress={goBack} >
            <Text style={styles.headerText}>Conteúdo Educativo - Icone acima</Text>
        </TouchableOpacity>
    </View>

    <View style={{ flex: 1, flexDirection: 'column' }}>
        <WebView source={{ uri: urlPath }} />
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
});
