import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
export default class Regform extends React.Component {
  render() {
    return(

      <View style={styles.regInfo}>
      <View style={styles.regform_name}>
        <View style={styles.namee}>
          <Text>First name</Text>
          <TextInput style={styles.textinput} placeholder="enter first name" underlineColorAndroid={'transparent'}/>
        </View>
        <View style={styles.lastnamee}>
          <Text>Last name</Text>
          <TextInput style={styles.textinput} placeholder="enter last name" underlineColorAndroid={'transparent'}/>
        </View>
        </View>
        <View style={styles.lastname}>
          <Text>Mobile number</Text>
          <TextInput style={styles.number} placeholder="+" underlineColorAndroid={'transparent'}/>
          <TextInput style={styles.num} placeholder="enter enter mobile number" underlineColorAndroid={'transparent'}/>
        </View>
        <View style={styles.lastname}>
          <Text>Emaill Adress</Text>
          <TextInput style={styles.textinput} placeholder="enter emaill adress" underlineColorAndroid={'transparent'}/>
        </View>
        <View style={styles.lastname}>
          <Text>Password</Text>
          <TextInput style={styles.textinput} placeholder="enter a Password" underlineColorAndroid={'transparent'}/>
        </View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.btText}>REGISTER</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  regInfo:{
    alignSelf:'stretch',
  },
  Text:{
    textDecorationStyle:'solid'
  },
  regform_name:{
    flex:1,
    flexDirection: 'row',
    justifyContent: "space-around",
},
  namee:{
    width: 100,
    height: 100,
},
  lastnamee:{
    width: 100, height: 100,
},
  textinput:{
    borderBottomWidth: 1,
    marginBottom: 30,
},
number:{
  borderBottomWidth: 1,
  marginBottom: 30,
  width: 40,
},
num:{
  marginBottom: 30,
  borderBottomWidth: 1,
},
button: {
  alignSelf:'stretch',
  borderRadius: 30,
  alignItems: 'center',
  backgroundColor:'#2979FF',
  padding: 20,
  color: 'white'
}
});
