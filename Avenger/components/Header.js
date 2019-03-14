import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image 
            source={require("../assets/logo.png")}
            style={styles.logo}
        />
        <Text style={styles.title}>vengers-End Game</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header:{
        height:80,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        borderBottomWidth:4,
        borderBottomColor:'#ccc'
    },
    logo:{
        width:40,
        height:40,
        marginTop:20
    },
    title:{
        marginTop:20,
        fontSize:20,
        fontWeight:'bold'
    }
})
