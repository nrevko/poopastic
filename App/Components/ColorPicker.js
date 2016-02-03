import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight } = React


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

export default ColorPicker