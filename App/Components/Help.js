import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight, LinkingIOS } = React

class Help extends Component{
  constructor(props){
    super(props)
    this._handleOpenBristolScale=this._handleOpenBristolScale.bind(this)
    this._handleOpenColorScale=this._handleOpenColorScale.bind(this)
    this._handleOpenUsefulInformation=this._handleOpenUsefulInformation.bind(this)
  }

  _handleOpenUrl(url){
    LinkingIOS.openURL(url)
  }

  _handleOpenBristolScale(){
    this._handleOpenUrl("https://www.gutsense.org/constipation/normal_stools.html")
  }

  _handleOpenColorScale(){
    this._handleOpenUrl("http://www.md-health.com/Stool-Color-Chart.html")
  }

  _handleOpenUsefulInformation(){
    this._handleOpenUrl("http://www.livescience.com/45017-poop-health-misconceptions-truth.html")
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this._handleOpenBristolScale}>
          <Text style={styles.buttonText}>Make sense of the Bristol Stool Form Scale.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this._handleOpenColorScale}>
          <Text style={styles.buttonText}>Make sense of Your Stool Color.</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this._handleOpenUsefulInformation}>
          <Text style={styles.buttonText}>Some Useful Information.</Text>
        </TouchableHighlight>
        <Text>If you are unsure about your current defecation experience and you need an advice on your turd, please contact your doctor.</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1
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
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

export default Help