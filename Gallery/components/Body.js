import React, { Component } from 'react'
import { Text, StyleSheet, View ,ScrollView ,Image,Dimensions} from 'react-native'

export default class Body extends Component {
  render() {
    return (
      <ScrollView >
          <View style={styles.main}>
            <View style={styles.imgWrapper}>
                <Image 
                    style={styles.image}
                    source={{uri:"https://picsum.photos/800/500/?random"}}
                    />
            </View>
            <View style={styles.imgWrapper}>
                <Image 
                    style={styles.image}
                    source={{uri:"https://picsum.photos/801/500/?random"}}
                    />
            </View>
            <View style={styles.imgWrapper}>
                <Image 
                    style={styles.image}
                    source={{uri:"https://picsum.photos/802/500/?random"}}
                    />
            </View>
            <View style={styles.imgWrapper}>
                <Image 
                    style={styles.image}
                    source={{uri:"https://picsum.photos/803/500/?random"}}
                    />
            </View>
            <View style={styles.imgWrapper}>
                <Image 
                    style={styles.image}
                    source={{uri:"https://picsum.photos/804/500/?random"}}
                    />
            </View>
            <View style={styles.imgWrapper}>
                <Image 
                    style={styles.image}
                    source={{uri:"https://picsum.photos/805/500/?random"}}
                    />
            </View>
            <View style={styles.imgWrapper}>
                <Image 
                    style={styles.image}
                    source={{uri:"https://picsum.photos/806/500/?random"}}
                    />
            </View>
            <View style={styles.imgWrapper}>
                <Image 
                    style={styles.image}
                    source={{uri:"https://picsum.photos/801/501/?random"}}
                    />
            </View>
            <View style={styles.imgWrapper}>
                <Image 
                    style={styles.image}
                    source={{uri:"https://picsum.photos/801/503/?random"}}
                    />
            </View>
            <View style={styles.imgWrapper}>
                <Image 
                    style={styles.image}
                    source={{uri:"https://picsum.photos/801/504/?random"}}
                    />
            </View>
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    imgWrapper:{
        margin:2,
        height:100,
        width:(Dimensions.get('window').width/2)-4,
    },
    image:{
        flex:1,
        width:null,
        alignSelf:'stretch'
    }
})
