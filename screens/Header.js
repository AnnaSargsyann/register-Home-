import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
export default class Header extends React.Component {
  render() {
    return(
      <View style={styles.header}>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#4A148C',
    position: "absolute",
    paddingTop: 20,
    width:'100%',
    height:200

  }
});
