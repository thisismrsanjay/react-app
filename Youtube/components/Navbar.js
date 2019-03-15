import React, { Component } from 'react'
import { Text, StyleSheet, View,Image ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
            <Image 
                style={styles.logo}
                source={require('../assets/youtube.png')}
            />
            <View style={styles.right}>
                <TouchableOpacity>
                <Icon name="search" size={27} style={styles.search}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon name="account-circle" size={27} style={styles.search}/>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{

    },
    navbar:{
        marginTop:20,
        height:55,
        backgroundColor:'#fff',
        elevation:3,
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    logo:{
        width:120,
        height:23
    },
    right:{
        flexDirection:'row'
    },
    search:{
        padding:5,
        marginLeft:15
    }
})
