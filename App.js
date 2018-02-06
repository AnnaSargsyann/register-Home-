import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Regform from "./screens/Info";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.circle}></View>
      <Regform style={styles.reg}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',



  },
  circle: {
    backgroundColor:'#6A1B9A',

    height:100,
    width:'100%',


  },
  reg: {
margin:300

  }
});
