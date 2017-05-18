import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  ListView,
  Image,
  TouchableOpacity,
  View
} from 'react-native'; 

import {
  StackNavigator,
} from 'react-navigation';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class LoginView extends Component{
	static navigationOptions = {
    title : 'Popular Movies',
  };

  constructor(props){
  	super(props);
  }

  render(){
  	return (
  		<View>
  		 <TextInput
	        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	        onChangeText={(text) => this.setState({login: text})}
	        value={this.state.text}
      	/>
      	<TextInput
	        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	        onChangeText={(text) => this.setState({password: text})}
	        value={this.state.text}
      	/>
      	</View>
  		);
  }
}