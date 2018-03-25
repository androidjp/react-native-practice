/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import ImgBananas from "./base/img.bananas";
import BlinkGreetingList from "./base/BlinkGreetingList";
import LotsOfStyles from "./base/ColorfulList";
import AlignItems from "./base/AlignItems";
import PizzaTranslator from './base/PizzaTranslator';

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <Text style={[styles.instructions, styles.titleText]}>
            Hello world!!
            </Text>
            <Text style={styles.line}>图片</Text>            
          <ImgBananas />
          <Text style={styles.line}>闪烁的文字列表</Text>
          <BlinkGreetingList />
          <Text style={styles.line}>各种style</Text>
          <LotsOfStyles />
          <Text style={styles.line}>各种布局</Text>
          <AlignItems/>
          <Text style={styles.line}>输入框</Text>
          <PizzaTranslator/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    width:'100%',
    backgroundColor:'gray',
    color:'white',
    fontWeight:'bold',
    padding:12
  },
  contentContainer: {
    paddingVertical: 20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  titleText: {
    fontSize: 26
  }
});
