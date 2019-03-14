import React, { Component } from "react";
import { Text, StyleSheet, View, } from "react-native";
import ImageComponent from "./ImageComponent";

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.full}>
          <ImageComponent imageSource={require("../assets/vision.jpg")} />
        </View>

        <View style={styles.column1}>
          <ImageComponent imageSource={require("../assets/bucky.jpg")} />
        </View>
        <View style={styles.column2}>
          <ImageComponent imageSource={require("../assets/ironman.jpg")} />
        </View>
        <View style={styles.full}>
          <ImageComponent imageSource={require("../assets/thor.jpg")} />
        </View>

        <View style={styles.column2}>
          <ImageComponent imageSource={require("../assets/warmachine.jpg")} />
        </View>
        <View style={styles.column1}>
          <ImageComponent imageSource={require("../assets/hulk.jpg")} />
        </View>
        <View style={styles.full}>
          <ImageComponent imageSource={require("../assets/captian.jpg")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",         //important
    padding: 5,
    backgroundColor: "#c1c1c1"
  },
  column1: {
      flex:1,
      padding:5,

  },
  column2: {
      flex:2,
     padding:5
  },
  full: {
      width:'100%',              //this allows it to be in another row
      alignItems:'center',
      justifyContent:'center',
      padding:5
    }
});
