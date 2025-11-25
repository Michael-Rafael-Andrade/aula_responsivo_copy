import { useState } from 'react';
import { StyleSheet, Text, View, Button, useWindowDimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  const { width, height } = useWindowDimensions();
  const [accessibleMode, setAccessibleMode] = useState(false);
  const isTablet = width > 700;
  const fontSize = isTablet ? 24 : 16;
  const padding = isTablet ? 30 : 15;

  return (
    <SafeAreaProvider>  
      <ResponsiveApp />
    </SafeAreaProvider>
  );
}

function ResponsiveApp() {
  return <SafeAreaView style={styles.container} >
    <Text style={styles.text}>
      Este é um exemplo de app responsivo e acessível
      {'\n'}(largura atual: {width.toFixed(0)});
    </Text>
    <View style={styles.buttonContainer}>
      <Button
        title={} // parei aqui 18:08 min do vídeo 2
      />
    </View>
  </SafeAreaView>
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
