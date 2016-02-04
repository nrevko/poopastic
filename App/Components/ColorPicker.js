import React, { Component } from "react-native";
const { View, Text, StyleSheet, Dimensions, TouchableHighlight } = React
import Camera from 'react-native-camera';


const COLORS=[
"darkslategray",
"darkolivegreen",
"olivedrab",
"yellowgreen",
"darkkhaki",
"olive",
"yellow",
"gold",
"goldenrod",
"darkgoldenrod",
"peru",
"tan",
"chocolate",
"saddlebrown",
"coral",
"darkred"
]

class ColorPicker extends Component{
  constructor(props) {
    super(props)
    this.state = {
      color: 'olive'
    }
    this.props.handleColorSet('olive')
  }

  colorStyle(color){
    return({backgroundColor: color, color: color})
  }

  stateColorStyle(color){
    return({backgroundColor: color, color: color, fontSize: 30, borderColor: '#48BBEC',borderWidth: 1})
  }

  getStyle(color){
    if(color!==this.state.color){
      return(this.colorStyle(color))
    } else {
      return(this.stateColorStyle(color))
    }
  }

  setColor(color){
    this.setState({color: color})
    this.props.handleColorSet(color)
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render(){
    return(
      <View>
        <Text style={styles.title}>Which Color:</Text>
        <View style={styles.container}>
          {COLORS.map((color) => (
            <TouchableHighlight key={color} onPress={() => this.setColor(color)}>
              <Text style={this.getStyle(color)}>OO</Text>
            </TouchableHighlight>
          ))}
        </View>

        <View style={styles.cameraContainer}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.Fill}>
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
          </Camera>
        </View>
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
  cameraContainer:{
    height: 50,
    marginTop: 30
  },
  title: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold"
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }

});

export default ColorPicker