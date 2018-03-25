import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { View, Text, Button } from "react-native";
// React Navigation中的视图是原生组件，同时用到了运行在原生线程上的Animated动画库，因而性能表现十分流畅。

import BasicApp from "./components/App";
import MovieListPage from "./movielist/MovieHome"; 

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome" //在导航中显示的标题内容
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button onPress={() => navigate("MovieList")} title="Goto Movie List" />
        <BasicApp />
      </View>
    );
  }
}

class MovieListScreen extends Component {
  static navigationOptions = {
    title: "MovieList"
  };
  render() {
    return <MovieListPage/>;
  }
}

//进行导航的注册
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  MovieList: { screen: MovieListScreen }
});

export default SimpleApp;
