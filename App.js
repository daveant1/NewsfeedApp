import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import  Header from './components/Header';
import { StyleSheet, Text, View } from 'react-native';
// import Nav from 'react-bootstrap/Nav';


const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Welcome!"/>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  bar: {
    height: 25,
    backgroundColor: 'purple',
    justifyContent:'center',
    alignItems: 'center',
  },
});
