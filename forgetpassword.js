import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View
} from 'react-native'; 

import {
  StackNavigator,
} from 'react-navigation';

import { firebaseApp,} from './index.ios';

export default class ForgetPasswordView extends Component{
	static navigationOptions = {
    title : 'Forget Password',
  };

  constructor(props){
  	super(props);
  	 this.state = {login: ""};
  }

  onForgetPassword(){
  	const userEmail = this.state.login;
  	firebaseApp.auth()
  		.sendPasswordResetEmail(userEmail)
  		.then(() =>{
  			console.log("email sent");
  		},() => {
  			console.log("error");
  		});
  }

  render(){
  	return (
  		<View style={{flex:1, flexDirection: 'column', padding: 20, alignItems: 'center'}}>
  			<TextInput
		      style={{height: 30, borderColor: 'gray', borderWidth: 1, marginBottom: 20}}
		      onChangeText={(text) => this.setState({login: text})}
          autoCapitalize="none"
	          placeholder="Type your email here"/>

		      <Button  
		      	title="Send Link"
		      	onPress={this.onForgetPassword.bind(this)}
            	style={{flex:0.5}}/>
  		</View>
  		);
  }
}