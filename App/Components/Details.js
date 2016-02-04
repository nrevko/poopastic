import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight, AsyncStorage } = React

import ColorPicker from './ColorPicker'
import ShapePicker from './ShapePicker'
import EventList from './EventList'
import Help from './Help'
import Main from './Main'

class Details extends Component{
  constructor(props){
    super(props)
    this._handleChangePage=this._handleChangePage.bind(this)
    this._handleChangePage1=this._handleChangePage1.bind(this)
    this._handleHelpChangePage=this._handleHelpChangePage.bind(this)
    this._setColor=this._setColor.bind(this)
    this._setShape=this._setShape.bind(this)
    this._pEnd = new Date()
    this._pStart = this.props.startTime
    if(!this._pStart){
      this._pStart = this._pEnd
    }
  }

  _handleChangePage(){
    let key = "key_"+this._pStart.getTime()
    let value = "pStart="+this._pStart+"|pEnd="+this._pEnd+"|shape="+this.imageIndex+"|color="+this.pColor
    AsyncStorage.setItem(key, value)

    this.props.navigator.push({
      title: "Activity Feed",
      component: EventList,
      barTintColor: "#F8F08F",
      leftButtonTitle: "< Home",
      onLeftButtonPress: ()=> this._handleChangePage1(),
      rightButtonTitle: "Help >",
      onRightButtonPress: ()=> this._handleHelpChangePage()
    })
  }

  _handleChangePage1(){
    this.props.navigator.push({
      title: "PoopASTIC",
      component: Main,
      leftButtonTitle: " ",
      barTintColor: "#F8F08F"
    })
  }

  _handleHelpChangePage(){
    this.props.navigator.push({
      title: "Help Page",
      component: Help,
      leftButtonTitle: "< Back",
      onLeftButtonPress: () => this.props.navigator.pop(),
      barTintColor: "#F8F08F"
    })
  }

  _setColor(color){
    this.pColor = color
  }
  _setShape(index){
    this.imageIndex = index
  }

  render(){
    return(
      <View style={styles.container}>
        <ColorPicker handleColorSet={this._setColor} />
        <ShapePicker handleShapeSet={this._setShape} />
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