import { useState } from 'react';
import { StyleSheet, Text, View, Button, useWindowDimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <ResponsiveApp />
    </SafeAreaProvider>
  );
}

function ResponsiveApp() {
  return <SafeAreaView style={styles.container} >

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
