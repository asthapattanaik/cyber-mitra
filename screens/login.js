import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import { render } from "react-dom";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width: WIDTH } = Dimensions.get("window");
class login extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("./assets/img1.jpg")}
      >
        <View style={styles.vtext}>
          <Text style={styles.textcontainer}>LOG IN</Text>
          <Text style={styles.text2}>Welcome to Cyber-Mitra</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
          />
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder={"Password"}
              secureTextEntry={true}
              placeholderTextColor={"rgba(255,255,255,0.7)"}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.vtext}>
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.btnText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 20,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 20,
    paddingLeft: 45,
    marginHorizontal: 25,
    color: "rgba(255,255,255,0.7)",
    backgroundColor: "gray",
  },
  btnContainer: {
    backgroundColor: "#2980b9",
    width: 100,
    height: 50,
    borderRadius: 25,

    marginHorizontal: 25,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },

  textcontainer: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 10,
  },
  vtext: {
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
  },
});
export default login;
