import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Mid extends Component {
  render() {
    return (
      <View style={styles.mid}>
        <View style={[styles.card,{borderRightColor:'#fff',
        borderRightWidth:4}]}  >
            <Text style={styles.textOne}> 10+ </Text>
            <Text style={styles.textTwo}> posts </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.textOne}> 10k </Text>
            <Text style={styles.textTwo}> Subs </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mid:{
        flexDirection:'row',
        backgroundColor:'#CF000F',
        borderTopWidth:8,
        borderTopColor:'#fff' 
    },
    card:{
        flex:1,
        padding:20,
        alignItems:'center',
    },
    textOne:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    textTwo:{
        color:'#fff',
        fontSize:14,
        marginTop:5 
    }
})
