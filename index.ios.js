/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MovieListView from './movie-list';
import MovieDetailView from './movie-detail';
import LoginView from './login';
import SignupView from './signup';
import ForgetPasswordView from'./forgetpassword';

import {
  AppRegistry,
  StyleSheet,
  Text,ListView,Image,
  View
} from 'react-native'; 
import {
  StackNavigator,
} from 'react-navigation';

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6HaLKu60ifNaYf1zK98myAqhgkYZZhiA",
    authDomain: "functionsexample.firebaseapp.com",
    databaseURL: "https://functionsexample.firebaseio.com",
    projectId: "functionsexample",
    storageBucket: "functionsexample.appspot.com",
    messagingSenderId: "828977057835"
};

export 
const firebaseApp = firebase.initializeApp(firebaseConfig);



const App = StackNavigator({
  Login: {screen: LoginView},
  Home: {screen: MovieListView},
  Details: {screen: MovieDetailView},
  Signup: {screen: SignupView},
  ForgetPassword: {screen: ForgetPasswordView}
});

AppRegistry.registerComponent('PopularMovies', () => App);
