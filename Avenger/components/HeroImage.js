import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'

export default class HeroImage extends Component {
  render() {
    return (
      
        <Image
            source={require('../assets/doctor.jpg')}
            style={styles.hero}
        />
     
    )
  }
}

const styles = StyleSheet.create({
    hero:{
        height:300,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})
