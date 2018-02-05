import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Regform from "./screens/Info";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
      <Regform style={styles.reg}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#fff',
    paddingLeft:60,
    paddingRight:60,


  },

  reg: {
    marginTop: 500
  }
});
