import React, { Component } from "react-native";
const { View, Text, StyleSheet, TouchableHighlight, ListView, AsyncStorage } = React

import PEvent from './PEvent'


var EXAMPLE_EVENT = [
 {pStart: new Date(), pEnd: new Date(), shape: 'banana', color: "darkslategray"},
 {pStart: new Date(), pEnd: new Date(), shape: 'banana', color: "darkolivegreen"},
{pStart: new Date(), pEnd: new Date(), shape: 'banajjkkjkjna', color: "olivedrab"},
{pStart: new Date(), pEnd: new Date(), shape: 'bankkkllkana', color: "yellowgreen"},
{pStart: new Date(), pEnd: new Date(), shape: 'banana', color: "darkkhaki"},
{pStart: new Date(), pEnd: new Date(), shape: 'banana', color: "olive"},
{pStart: new Date(), pEnd: new Date(), shape: 'banana', color: "yellow"},
{pStart: new Date(), pEnd: new Date(), shape: 'banana', color: "gold"},
{pStart: new Date(), pEnd: new Date(), shape: 'banana', color: "goldenrod"},
 {pStart: new Date(), pEnd: new Date(), shape: 'banana', color: "darkgoldenrod"},
{pStart: new Date(), pEnd: new Date(), shape: 'banana', color: "peru"},
{pStart: new Date(), pEnd: new Date(), shape: 'banana', color: "tan"},
{pStart: new Date('2015-12-30 11:33'), pEnd: new Date('2015-12-30 11:36'), shape: 'banana', color: "chocolate"},
{pStart: new Date('2015-12-30'), pEnd: new Date(), shape: 'banana', color: "saddlebrown"},
{pStart: new Date('2015-12-12'), pEnd: new Date(), shape: 'banana', color: "coral"},
 {pStart: new Date('2015-08-08'), pEnd: new Date(), shape: 'banana', color: "darkred"},
]


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
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <PEvent pEvent={rowData} />}
        style={styles.ListView} />
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', //make children of our main container to be layed out horizontally (instead of vertically)
    justifyContent: 'center',
    alignItems: 'center'
  },
  listView: {
    paddingTop: 20,
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
  }
})

export default EventList