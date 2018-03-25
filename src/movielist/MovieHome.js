import React, { Component } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import FadeInView from "./../components/animate/FadeInView";

var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

var MOCKED_MOVIES_DATA = [
  {
    title: "大熊猫",
    year: "2018",
    posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
  }
];

export default class MovieHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  _keyExtractor = (item, index) => item.id;

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true
        });
      });
  }

  //   渲染函数入口
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={this.renderMovie}
        style={styles.list}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载电影列表。。。</Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <FadeInView>
        <View style={[styles.container,styles.card]}>
          <Image
            source={{ uri: movie.item.posters.thumbnail }}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.item.title}</Text>
            <Text style={styles.year}>{movie.item.year}</Text>
          </View>
        </View>
      </FadeInView>
    );
  }
}

var styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  card: {
    borderRadius: 12,
    backgroundColor: "#61cca6",
    marginLeft: "6%",
    marginRight: "6%",
    marginTop:6,
    marginBottom:6,
    shadowColor:'gray',
    shadowOffset:{h:10,w:10},
    shadowRadius:3,
    shadowOpacity:0.8,
    padding:6
  },
  rightContainer: {
    flex: 1
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  }
});
