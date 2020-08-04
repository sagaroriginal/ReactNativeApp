import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
       <Text style={styles.textStyle}>Header</Text>
     </View>
     <View style={styles.body}>
       <Text style={styles.bodyText}>Hello Welcome <Text>Span</Text> React Native </Text>
       <Text>Hello Welcome React Native </Text>
       <Text>Hello Welcome React Native </Text>
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
    backgroundColor:'pink',
    padding:20.0,
  },
  textStyle:{
    color:'red',
    fontWeight: 'bold',
  },
  body:{
      backgroundColor:'yellow',
      padding:20.0,
  },
  bodyText:{
    color:'blue',
    fontWeight:'bold',
  }


});
