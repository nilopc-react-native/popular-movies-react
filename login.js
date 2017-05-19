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

export default class LoginView extends Component{
	static navigationOptions = {
    title : 'Popular Movies',
  };

  constructor(props){
  	super(props);
    this.props = props;
    this.state = {login: "", password: ""};
  }

  onLogin(){
    console.log(this.getState);
    const login = this.state.login;
    const password = this.state.password;
    firebaseApp
    .auth()
    .signInWithEmailAndPassword(login,password)
    .then(() => {
      const {navigate} = this.props.navigation;
      navigate('Home',{});
    },() => {
      console.log("login error");
    });
  }

  onSignup(){
    const {navigate} = this.props.navigation;
    navigate('Signup',{});
  }

  onForgetPassword(){
    const {navigate} = this.props.navigation;
    navigate('ForgetPassword',{});
  }


  render(){
  	return (
  		<View style={{flex:1, flexDirection: 'column', padding: 20, alignItems: 'center'}}>
  		 <TextInput
	        style={{height: 30, borderColor: 'gray', borderWidth: 1, marginBottom: 20}}
	        onChangeText={(text) => this.setState({login: text})}
          placeholder="Type your email here"
          autoCapitalize="none"
      	/>
      	<TextInput secureTextEntry={true}
	        style={{height: 30, borderColor: 'gray', borderWidth: 1}}
	        onChangeText={(text) => this.setState({password: text})}
	       autoCapitalize="none"
           placeholder="Type your password here"
      	/>
        <Button
          title="Login"
          onPress={this.onLogin.bind(this)}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Button
            title="Signup"
            onPress={this.onSignup.bind(this)}
            style={{flex:0.5}}
          />
          <Button
            title="Forget password"
            style={{flex:0.5}}
            onPress={this.onForgetPassword.bind(this)}
          />
        </View>
      	</View>
  		);
  }
}