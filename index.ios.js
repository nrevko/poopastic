/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import Main from './App/Components/Main'

class PoopTrackerProject extends Component {

  render() {
    return (
      <NavigatorIOS
        itemWrapperStyle={styles.navWrap}
        style={styles.container}
        navigationBarHidden = {false}
        backButtonTitle = "Cancel"
        initialRoute={{
          title:"PoopASTIC",
          component: Main,
          barTintColor: "#F8F08F"
        }} />
    );
  }
}

const styles = StyleSheet.create({
  navWrap: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },

});

AppRegistry.registerComponent('PoopTrackerProject', () => PoopTrackerProject);

module.exports = PoopTrackerProject;




// var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
// var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
// var PAGE_SIZE = 25;
// var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
// var REQUEST_URL = API_URL + PARAMS;
// import React, {
//   AppRegistry,
//   Component,
//   Image,
//   StyleSheet,
//   Text,
//   ListView,
//   View,
//   TouchableHighlight
// } from 'react-native';

// class PoopTrackerProject extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSource: new ListView.DataSource({
//         rowHasChanged: (row1, row2) => row1 !== row2,
//       }),
//       loaded: false,
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData() {
//     fetch(REQUEST_URL)
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
//           loaded: true,
//         });
//       })
//       .done();
//   }

//   render() {
//     if (!this.state.loaded) {
//       return this.renderLoadingView();
//     }
//         // <ListView
//         //   dataSource={this.state.dataSource}
//         //   renderRow={this.renderMovie}
//         //   style={styles.listView} />
//     return (
//       <View>
//         <Text> OOOO </Text>
//           <Text> OOOO </Text>
//           <Text> OOOO </Text>
//           <Text> OOOO </Text>

//         <View style={styles.container}>
//           <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
//             <Text style={styles.buttonText}>It Happened</Text>
//           </TouchableHighlight>
//           <Text>  </Text>
//           <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
//             <Text style={styles.buttonText}>Start</Text>
//           </TouchableHighlight>
//         </View>
//       </View>
//     )
//   }

//   renderLoadingView() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           Loading movies...
//         </Text>
//       </View>
//     );
//   }

//   renderMovie(movie) {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{uri: movie.posters.thumbnail}}
//           style={styles.thumbnail}
//         />
//         <View style={styles.rightContainer}>
//           <Text style={styles.title}>{movie.title}</Text>
//           <Text style={styles.year}>{movie.year}</Text>
//         </View>
//       </View>
//     );
//   }
// }

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row', //make children of our main container to be layed out horizontally (instead of vertically)
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   rightContainer: {  // takes up the remaining space in the parent container
//     flex: 1,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   year: {
//     textAlign: 'center',
//   },
//   thumbnail: {
//     width: 53,
//     height: 81,
//   },
//   listView: {
//     paddingTop: 20,
//     backgroundColor: '#F5FCFF',
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'white',
//     alignSelf: 'center'
//   },
//   button: {
//     height: 36,
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#48BBEC',
//     borderColor: '#48BBEC',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignSelf: 'stretch',
//     justifyContent: 'center'
//   },
// });
