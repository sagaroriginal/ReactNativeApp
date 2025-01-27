import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
       <Text style={styles.textStyle}>Hello React Native</Text>
     </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'black',
    padding:20.0,
  },
  textStyle:{
    color:'blue',
    fontWeight: 'bold',
  }
});
