import React from 'react';
import { StyleSheet, Text, View, Dimensions,Image,Button, TextInput, TouchableOpacity} from 'react-native';
import {scale, scaleModerate, scaleVertical} from '.././utils/scale';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
export default class Regform extends React.Component {

  static navigationOptions = {
      header: null
    };

    constructor(props) {
      super(props);
    }


  _renderImage(image) {
  let contentHeight = scaleModerate(375, 1);
  let height = Dimensions.get('window').height - contentHeight;
  let width = Dimensions.get('window').width;
  image = (<Image style={[styles.image, {height, width}]}
                    source={require('.././images/background.png')}/>);
                    return image;
                  }
  render() {

    let navigator = this.props.navigation;
      let image = this._renderImage();
    return(
      <View style={styles.container}>
      {image}
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
          <Button
            onPress={()=>{
  navigator.goBack()
  }}

          	  title="REGISTER"
          	  />



  </View>
        </View>

    );
  }
}
const styles = StyleSheet.create({
  container:{flex: 1},
  regInfo: {
    paddingLeft: 60,
    paddingRight: 60,
    flex: 1,
    flexDirection: 'column',
  },

  first: {
    width:100,

  },
  image: {
resizeMode: 'cover',
marginBottom: scaleVertical(10),
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
