import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight, Image } = React

const IMAGES=[
  require("../images/bristol_1.png"),
  require("../images/bristol_2.png"),
  require("../images/bristol_3.png"),
  require("../images/bristol_4.png"),
  require("../images/bristol_5.png"),
  require("../images/bristol_6.png"),
  require("../images/bristol_7.png")
]

class ShapePicker extends Component{
  constructor(props) {
    super(props)
    this.state = {
      imageIndex: 2
    }
    this.props.handleShapeSet(2)
  }

  getStyle(index){
    if(index===this.state.imageIndex){
      return({borderColor: '#48BBEC',borderWidth: 1,width: 100, height: 80})
    } else{
      return({width: 40, height: 40})
    }
  }

  setShape(index){
    this.setState({imageIndex: index})
    this.props.handleShapeSet(index)
  }


  render(){
    return(
      <View>
        <Text style={styles.title}>Which Shape:</Text>
        <View style={styles.container}>
          {IMAGES.map((imageSource, imageIndex) => (
            <TouchableHighlight key={imageIndex} onPress={() => this.setShape(imageIndex)}>
              <Image source={IMAGES[imageIndex]} style={this.getStyle(imageIndex)} />
            </TouchableHighlight>
          ))}
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
  title: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold"
  }

});

export default ShapePicker