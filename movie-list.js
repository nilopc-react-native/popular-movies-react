import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  TouchableOpacity,
  View
} from 'react-native'; 

import {
  StackNavigator,
} from 'react-navigation';

export default class MovieListView extends Component {
  static navigationOptions = {
    title : 'Movies List',
  };
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    this.props = props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentWillMount(){
    console.ignoredYellowBox = ['Remote debugger'];
    this.getMoviesAsync();
  }

  getMoviesAsync(){
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4895a1e4cec2aeb113fc7178193f3920")
    .then((response) => response.json())
    .then((responseJson) => {
      var movieArray = responseJson.results;
      this.setState({dataSource: this.state.dataSource.cloneWithRows(movieArray)});
      return movieArray;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
  } 

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <TouchableOpacity onPress={() => {
              navigate('Details', {currentMovieData: rowData})
            }}>
              <View style={{flex:1, flexDirection: 'row',alignItems: 'center'}}> 
                <Image style={styles.square} source={{uri: 'https://image.tmdb.org/t/p/w500'.concat(rowData.poster_path)}}/>
                <Text>{rowData.original_title}</Text>
              </View>
            </TouchableOpacity>
          }/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});