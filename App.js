import React from 'react';
import Loginform from './screens/Login';
import RegForm from './screens/Info';
import {StackNavigator} from 'react-navigation';
import {Provider}	from "react-redux"
import store from "./store";
import { StyleSheet,TouchableOpacity, KeyboardAvoidingView,TextInput,Text, View } from 'react-native';
const AppNavigation = StackNavigator({
	Loginform: {
	  screen: Loginform,
	},
	RegForm:{
		screen:RegForm
	}
  })

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
  				<AppNavigation/>
  			</Provider>
      </View>
          );
          }
}
 const styles=StyleSheet.create({
     container: {
        flex:1,
      },
  })
