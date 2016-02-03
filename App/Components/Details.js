import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight } = React

import ColorPicker from './ColorPicker'
import ShapePicker from './ShapePicker'

class Details extends Component{

  render(){
    return(
      <View style={styles.container}>
        <ColorPicker />
        <ShapePicker />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Details