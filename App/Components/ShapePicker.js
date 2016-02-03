import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight, Image } = React

const image1=require("../images/bristol_1.png")
const image2=require("../images/bristol_2.png")
const image3=require("../images/bristol_3.png")
const image4=require("../images/bristol_4.png")
const image5=require("../images/bristol_5.png")
const image6=require("../images/bristol_6.png")
const image7=require("../images/bristol_7.png")

const IMAGES=[image1,image2,image3,image4,image5,image6,image7]


// const IMAGES=[
// require("../images/bristol_1.png"),
// require("../images/bristol_2.png"),
// require("../images/bristol_3.png"),
// require("../images/bristol_4.png"),
// require("../images/bristol_5.png"),
// require("../images/bristol_6.png"),
// require("../images/bristol_7.png")
// ]

class ShapePicker extends Component{
  constructor(props) {
    super(props)
    this.state = {
      imageIndex: 2
    }
  }

  // colorStyle(color){
  //   return({backgroundColor: color, color: color})
  // }

  stateColorStyle(){
    return({fontSize: 30, borderColor: '#48BBEC',borderWidth: 1})
  }

  getStyle(index){
    if(index===this.state.imageIndex){
      return(this.stateColorStyle())
    }
  }


  render(){
    return(
      <View>
        <Text style={styles.title}>Which Shape:</Text>
        <View style={styles.container}>
          {IMAGES.map((imageSource, imageIndex) => (
            <TouchableHighlight key={imageIndex} onPress={() => this.setState({imageIndex})}>
              <Image source={imageSource} style={this.getStyle(imageIndex)} />
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