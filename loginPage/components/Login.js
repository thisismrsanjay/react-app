import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,Dimensions,KeyboardAvoidingView } from 'react-native'
import MyForm from './MyForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo.png')} 
            />
            <Text style={styles.title}>A simple login App</Text>
        </View>
        <View style={styles.myForm}>
            <MyForm/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:Dimensions.get('window').width,
        backgroundColor:'#60c965'
    },
    logoContainer:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
       
        width:100,
        height:100
    },
    title:{
        color:'#fff',
        fontSize:20,
        marginTop:20
    },
    myForm:{
        flex:2
    }

})
