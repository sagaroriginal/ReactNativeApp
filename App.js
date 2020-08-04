import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Sagar');
  const [Person, setPerson] = useState({name:'Samir',age:20})
   const clickHandler = () =>{
     setName('Sagar Sarkar');
     setPerson({name:'subir',age:19});
   }

  return (
    <View style={styles.container}>
     <Text>My name is {name}</Text>
     <Text>His name is {Person.name} and age is {Person.age}</Text>
     <View style={styles.bottonContainer}>
       <Button title='update state' onPress={clickHandler} />
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
  bottonContainer:{
    backgroundColor:'red',
    marginTop: 20.0,
  }
});
