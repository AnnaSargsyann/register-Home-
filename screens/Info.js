import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Regform extends React.Component {
  render() {
    return(

      <View style={styles.regInfo}>

        <View style={styles.for_info}>
          <View style={styles.first}>
            <Text>First Name</Text>
            <TextInput style={styles.textinput} placeholder="enter first name" underlineColorAndroid={'transparent'}/>
          </View>
          <View style={styles.first}>
            <Text>Last Name</Text>
            <TextInput style={styles.textinput} placeholder="enter last name" underlineColorAndroid={'transparent'}/>
          </View>
        </View>
        <View style={styles.n}>
        <Text>Mobile Number</Text>
          <View style={styles.forNumber}>

              <TextInput style={styles.textinput1} placeholder="+" underlineColorAndroid={'transparent'} />

              <TextInput style={styles.textinput2} placeholder="enter mobile number" underlineColorAndroid={'transparent'}/>
          </View>
        </View>
          <View style={styles.emaill}>
            <Text>Emaill Adress</Text>
            <TextInput style={styles.textinput} placeholder="enter emaill adress" underlineColorAndroid={'transparent'}/>
          </View>
          <View style={styles.password}>
            <Text>Password</Text>
            <TextInput style={styles.textinput} placeholder="enter a password" underlineColorAndroid={'transparent'}/>
          </View>
          <TouchableOpacity style={styles.button}>
        <Text style={styles.btText}>REGISTER</Text>
</TouchableOpacity>



        </View>

    );
  }
}
const styles = StyleSheet.create({
  regInfo: {
    paddingLeft:60,
    paddingRight:60,
    flex: 1,
    flexDirection: 'column',
  },

  first: {
    width:100,

  },
  for_info: {
    flexDirection: "row",
     justifyContent: "space-around",

     borderColor:'green',
  },
  forNumber:{

    flexDirection: "row",
    justifyContent: "space-around",

    borderColor:'green'
  },
  n:{
    borderColor:'red',


  },
  Text:{
    marginBottom: 30,
  },
textinput: {
  borderBottomWidth: 1,
  marginBottom: 30,
},
textinput1:{
  borderBottomWidth: 1,
  width: 50,
  marginBottom: 30,
},
textinput2:{
  borderBottomWidth: 1,
  width: 150,
  marginBottom: 30,
},
emaill:{

  borderColor:'green'
},
password:{

  borderColor:'green'
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
