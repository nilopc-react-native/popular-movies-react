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

export default class SignupView extends Component{
	static navigationOptions = {
    title : 'Signup',
  };

  constructor(props){
  	super(props);
  	 this.state = {login: "", password: ""};
  }

  onCreateUser(){
  	const userEmail = this.state.login;
  	const userPassword = this.state.password;
  	const userName = this.state.userName;
  	firebaseApp.auth()
  		.createUserWithEmailAndPassword(userEmail, userPassword)
  		.then(() =>{
  			console.log("user created");
  			const userId = firebaseApp.auth().currentUser.uid;
  			firebaseApp.database().ref('users/' + userId).set({
		    username: userName,
		    email: userEmail
  			});
  		},() => {
  			console.log("error");
  		});
  }

  render(){
  	return (
  		<View style={{flex:1, flexDirection: 'column', padding: 20, alignItems: 'center'}}>
	  		<TextInput
			      style={{height: 30, borderColor: 'gray', borderWidth: 1, marginBottom: 20}}
			      onChangeText={(text) => this.setState({userName: text})}
		          placeholder="Type your user name here"/>
  			<TextInput
		      style={{height: 30, borderColor: 'gray', borderWidth: 1, marginBottom: 20}}
		      onChangeText={(text) => this.setState({login: text})}
		      autoCapitalize="none"
	          placeholder="Type your email here"/>
	          <TextInput
			        style={{height: 30, borderColor: 'gray', borderWidth: 1, marginBottom: 20}}
			        onChangeText={(text) => this.setState({password: text})}
			        autoCapitalize="none"
			        secureTextEntry={true}
		          placeholder="Type your password here"
		      	/>

		      <Button  
		      	title="Create"
		      	onPress={this.onCreateUser.bind(this)}
            	style={{flex:0.5}}/>
  		</View>
  		);
  }
}