import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity,TextInput} from 'react-native'

export default class MyForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
            placeholder="Username"
            style={styles.input}
        /> 
        <TextInput 
            placeholder="Password"
            secureTextEntry
            style={styles.input}
        /> 
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20 
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.8)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:20
    },
    buttonContainer:{
        marginTop:30,
        backgroundColor:'#00c9c9',
        paddingVertical:15,
        borderRadius:16
    },
    buttonText:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    }

})
