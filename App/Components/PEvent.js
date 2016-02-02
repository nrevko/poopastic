import React, { Component, PropTypes } from "react-native";
const { View, Text, StyleSheet } = React

class PEvent extends Component{
  constructor(props){
    super(props)
  }

  duration(){
    let duration = (this.props.pEvent.pEnd - this.props.pEvent.pStart)/1000 //seconds
    if(duration < 10){
      return("speedy")
    }
    else if(duration<60){
      return("normal")
    }
    else if(duration<180){
      return("slow")
    }
    else if(duration<300){
      return("thoughtful")
    }
    else{
      return("stuck")
    }
  }

  date(){
    let dateTime = this.props.pEvent.pStart
    return(dateTime.toString().substring(0,3) + " " + dateTime.getHours()+ dateTime.toLocaleTimeString().substring(1,4))
  }

  pStyle(){
    return({backgroundColor: this.props.pEvent.color, flex: 1})
  }

  todayStyle(){
    if(this.props.pEvent.pStart.toDateString()==(new Date()).toDateString()){
      return({backgroundColor: "darkseagreen"})
    }
  }

  render(){
    return(
      <View style={this.todayStyle()}>
        <View style={styles.container}>
          <View style={styles.colorStop}>
            <Text style={this.pStyle()}>{this.props.pEvent.shape}</Text>
          </View>
          <View style={styles.container}>
            <Text>{this.duration()} </Text>
          </View>
          <View style={styles.container}>
            <Text>{this.date()}</Text>
          </View>
        </View>
      </View>
  )}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', //make children of our main container to be layed out horizontally (instead of vertically)
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorStop: {
    height: 20,
    flexDirection: 'row',
    borderColor: '#48BBEC',
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    position: 'relative',
    width: 100
  }
})

PEvent.propTypes = {
  pEvent: PropTypes.object.isRequired
}

export default PEvent