import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight } = React

import HeartFloater from './FloatingHearts'

class InProgress extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
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
