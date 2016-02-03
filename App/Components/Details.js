import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight } = React

import ColorPicker from './ColorPicker'
import ShapePicker from './ShapePicker'
import EventList from './EventList'

class Details extends Component{
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
        <ColorPicker />
        <ShapePicker />
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this._handleChangePage}>
            <Text style={styles.buttonText}>Definitely Done</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttonContainer: {
    marginTop: 15
  }
});

export default Details