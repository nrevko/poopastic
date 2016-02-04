import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight, ListView, AsyncStorage } = React

import PEvent from './PEvent'

class EventList extends Component{
  constructor(props){
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    }
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
        <Text style={styles.title}>Events</Text>
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
  listView: {
    paddingTop: 10,
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
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: 'flex-start',
  }
})

export default EventList