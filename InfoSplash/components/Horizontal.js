import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView,Dimensions } from 'react-native'

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
        <View style={styles.outer}>
                <Text style={styles.innerText}> Welcome to first App </Text>
        </View>
        <View style={[styles.outer,styles.red]}>
                <Text style={styles.innerText}>Made In React Native</Text>
        </View>
        <View style={[styles.outer,styles.green]}>
                <Text style={styles.innerText}> Simple UI </Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
    },
    outer:{
        backgroundColor:'#007bb6',
        justifyContent:'center',
        alignItems:'center',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        
    },
    innerText:{
        color:'#fff',
        fontSize:23,
        fontWeight:'bold'
    },
    red:{
        backgroundColor:'#dd4b39'
    },
    green:{
        backgroundColor:'#27ae60'
    }


})
