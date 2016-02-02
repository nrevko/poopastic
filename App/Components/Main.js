import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight, NavigatorIOS } = React

import EventList from './EventList'

class Main extends Component{
  constructor(props){
    super(props)
    this._handleChangePage=this._handleChangePage.bind(this)
  }

  _handleChangePage(){
    this.props.navigator.push({
      title: "All Events",
      component: EventList,
      barTintColor: "#F8F08F"
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this._handleChangePage}>
          <Text style={styles.buttonText}>It Happened</Text>
        </TouchableHighlight>
        <Text>  </Text>
        <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
});

export default Main