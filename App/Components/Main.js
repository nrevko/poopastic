import React, { Component } from "react-native";
const { View, Text, Image, StyleSheet, TouchableHighlight, NavigatorIOS } = React

import Details from './Details'
import InProgress from './InProgress'
import EventList from './EventList'

class Main extends Component{
  constructor(props){
    super(props)
    this._handleHappenedChangePage=this._handleHappenedChangePage.bind(this)
    this._handleStartChangePage=this._handleStartChangePage.bind(this)
    this._handleChangePage=this._handleChangePage.bind(this)
  }

  _handleHappenedChangePage(){
    this.props.navigator.push({
      title: "Details",
      component: Details,
      barTintColor: "#F8F08F"
    })
  }

  _handleStartChangePage(){
    this.props.navigator.push({
      title: "In Progress",
      component: InProgress,
      barTintColor: "#F8F08F",
      passProps: {
        startTime: new Date()
      }
    })
  }

  _handleChangePage(){
    this.props.navigator.push({
      title: "Activity Feed",
      component: EventList,
      barTintColor: "#F8F08F",
      navigationBarHidden: true
    })
  }

  render(){
    return(
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image source={require('../images/foto-economist.jpg')} />
        </View>
        <View style={styles.container}>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this._handleHappenedChangePage}>
            <Text style={styles.buttonText}>It Happened</Text>
          </TouchableHighlight>
          <Text>  </Text>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this._handleStartChangePage}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this._handleChangePage}>
            <Text style={styles.buttonText}>View Your Activity</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  container: {
    flex: 1,
    flexDirection: 'row', //make children of our main container to be layed out horizontally (instead of vertically)
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  title: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: 'center',
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: "#F8F08F"
  },
});

export default Main