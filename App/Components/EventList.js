import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight, ListView, AsyncStorage } = React

import PEvent from './PEvent'
import Main from './Main'
import Help from './Help'

class EventList extends Component{
  constructor(props){
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    }
    this._handleChangePage=this._handleChangePage.bind(this)
    this._handleHelpChangePage=this._handleHelpChangePage.bind(this)
  }

  _handleChangePage(){
    this.props.navigator.push({
      title: "PoopASTIC Event",
      component: Main,
      barTintColor: "#F8F08F"
    })
  }

  _handleHelpChangePage(){
    this.props.navigator.push({
      title: "Help Page",
      component: Help,
      barTintColor: "#F8F08F"
    })
  }

  componentDidMount(){

    AsyncStorage.getAllKeys().then((allKeys) => {
      let sortedKeys = allKeys.map((stringKey)=>(parseInt(stringKey.match(/key_(.*)/)[1]))).sort().reverse().map((intKey)=>("key_"+intKey))
      AsyncStorage.multiGet(sortedKeys).then((keyValuez) =>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(
            keyValuez.map((keyValue) => {
              let value = keyValue[1]
              let result = value.match(/pStart=(.*)\|pEnd=(.*)\|shape=(.*)\|color=(.*)/)
              let pStart = result[1]
              let pEnd = result[2]
              let pShape = result[3]
              let pColor = result[4]


              return({pStart: new Date(pStart), pEnd: new Date(pEnd), shape: pShape, color: pColor})
            })
          )
        })
      })
    }).done()
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight style={styles.leftButton} underlayColor='#99d9f4' onPress={this._handleChangePage}>
            <Text style={styles.buttonText}> {"<"}Home </Text>
          </TouchableHighlight>
          <Text style={styles.title}>Your Recent Activity</Text>

          <TouchableHighlight style={styles.rightButton} underlayColor='#99d9f4' onPress={this._handleHelpChangePage}>
            <Text style={styles.buttonText}> Help{">"} </Text>
          </TouchableHighlight>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <PEvent pEvent={rowData} />}
          style={styles.ListView} />
      </View>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection: 'row'
  },
  listView: {
    backgroundColor: '#F5FCFF',
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
  },
  title: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: 'flex-start',
    marginRight: 40,
    marginLeft: 40
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  },
  leftButton: {
    height: 26,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  rightButton: {
    height: 26,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
})

export default EventList