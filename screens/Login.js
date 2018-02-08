import React from 'react';
import { StyleSheet,TouchableOpacity, Keyboard,Dimensions,TextInput, Image,Text, View } from 'react-native';
import {scale, scaleModerate, scaleVertical} from '.././utils/scale';
import { Button } from 'react-native-elements';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
} from 'react-native-ui-kitten';

export default class Loginform extends React.Component {
  static navigationOptions = {
   header: null,
 };
constructor(props) {
   super(props);
 }
 _goTo(){
		this.props.navigation.navigate("RegForm")
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
    let image = this._renderImage();
    return (

      <RkAvoidKeyboard
              onStartShouldSetResponder={ (e) => true}
              onResponderRelease={ (e) => Keyboard.dismiss()}
              style={styles.screen}>
 {image}
<View style={styles.area2}>
<Text  style={styles.text}> Emaill Adress </Text>
 <TextInput style={styles.textinput}
            placeholder='Enter Emaill Adress'
            underlineColorAndroid='transparent'

      />
<Text> Password </Text>
<TextInput style={styles.textinput}
           placeholder='Tap to enter password'
           secureTextEntry
            underlineColorAndroid='transparent'

           />
     <View style={styles.area3}>

     <TouchableOpacity>
      <Text style={styles.text1}>Forget Password? </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
					this._goTo()
				}}>

           <Text style={styles.text1}>Register</Text>
           </TouchableOpacity>

             </View>
</View>

<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>LOGIN </Text>
  </TouchableOpacity>

</RkAvoidKeyboard>
          );
        }
}
    const styles=StyleSheet.create({
      screen: {
     flex: 1,
     alignItems: 'center',

   },
    area1:{
        backgroundColor:'#600080',
        height:200,
        width:500,

          },
          image: {
    resizeMode: 'cover',
    marginBottom: scaleVertical(10),
  },
       area2:{
            height:250,
            width:'100%',
            justifyContent:"center",
            padding:50
          },
        area3:{
            height:40,
            width:250,
            justifyContent:"center",
            alignItems:"center",
       },
        text1:{
            fontSize:20,
            color:'#1ad1ff',
            borderBottomWidth:1,
            borderBottomColor:'#1ad1ff'

          },
      button:{
          alignSelf:'stretch',
          backgroundColor:'#1ad1ff',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:30,
          width:'40%',
          height:'8%',
          marginLeft:'auto',
          marginRight:'auto'
  },
  buttonn:{
      marginHorizontal: 14,
  },
     buttonText:{
          color:'white',
          fontSize:25
  },
    textinput:{
          height:60,
          borderWidth: 2,
          borderColor:'grey',
          marginBottom: 20,
          paddingHorizontal:10,
          borderRadius:50,
},

  })
