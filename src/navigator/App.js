import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import {View, Text, Button } from "react-native";
// React Navigation中的视图是原生组件，同时用到了运行在原生线程上的Animated动画库，因而性能表现十分流畅。

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome" //在导航中显示的标题内容
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button onPress={() => navigate("Chat")} title="Chat with Lucy" />
      </View>
    );
  }
}

class ChatScreen extends Component {
  static navigationOptions = {
    title: "Chat with Amy"
  };
  render() {
    return (
      <View>
        <Text>Hello Amy, how are you?</Text>
      </View>
    );
  }
}

//进行导航的注册
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default SimpleApp;
