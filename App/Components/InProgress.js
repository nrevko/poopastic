import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight } = React

import HeartFloater from './FloatingHearts'
import Details from './Details'

class InProgress extends Component{
  constructor(props){
    super(props)
    this._handleStopChangePage=this._handleStopChangePage.bind(this)
  }

  _handleStopChangePage(){
    this.props.navigator.push({
      title: "Details",
      component: Details,
      barTintColor: "#F8F08F",
      passProps: {
        startTime: this.props.startTime
      }
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this._handleStopChangePage}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableHighlight>
        </View>
        <HeartFloater />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
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

export default InProgress
