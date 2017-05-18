/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MovieListView from './movie-list';
import MovieDetailView from './movie-detail';
import {
  AppRegistry,
  StyleSheet,
  Text,ListView,Image,
  View
} from 'react-native'; 
import {
  StackNavigator,
} from 'react-navigation';




const App = StackNavigator({
  Main: {screen: MovieListView},
  Details: {screen: MovieDetailView}
});

AppRegistry.registerComponent('PopularMovies', () => App);
