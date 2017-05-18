import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native'; 

export default class MovieDetailView extends Component {
  static navigationOptions = {
    title : 'Selected Movie',
  };

  constructor(props){
  	super(props);
  }
  render(){
  	const { currentMovieData } = this.props.navigation.state.params;
  	console.log(currentMovieData);
  	this.props.navigation.title = currentMovieData.original_title;
  	return (
  		<ScrollView>
	  		<View style={{flex: 1, 
	  			flexDirection: 'column', 
	  			justifyContent: 'space-between',
	  			alignItems: 'center',
	  				paddingTop: 22}}>
	  			<Text style={{width:200}}>{currentMovieData.original_title}</Text>
	  			<Text style={{width:150}}>Score: {currentMovieData.vote_average}</Text>
	  			<Image source={{uri: 'https://image.tmdb.org/t/p/w500'.concat(currentMovieData.poster_path)}}
	  			 style={{padding:15, width: 300, height: 400}}/>
	  			<Text style={{padding:15}}>{currentMovieData.overview}</Text>
	  			<Text/>
	  		</View>
  		</ScrollView>
  		);
  }
}