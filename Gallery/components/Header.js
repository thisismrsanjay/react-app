import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground ,View,Image} from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <ImageBackground 
        style={styles.header}
        source={{uri:"https://picsum.photos/800/500/?random"}}
        >
        <View style={styles.profileContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/user.jpg')} />
            </View>
            <Text style={styles.name}>Dante</Text>
            <Text style={styles.desc}>Son Of Sparda</Text>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    header:{
        height:280,
        width:null,
        alignSelf:'stretch'
    },
    profileContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        backgroundColor:'rgba(0,0,0,0.4)'
    },
    imageContainer:{
        width:180,
        height:180
    },
    image:{
        flex:1,
        width:null,
        alignSelf:'stretch',
        borderRadius:90,
        borderWidth:3,
        borderColor:'#fff'

    },
    name:{
        marginTop:8,
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    },
    desc:{
        color:'#fff',
        fontSize:15,
        fontStyle:'italic'
    }
})
