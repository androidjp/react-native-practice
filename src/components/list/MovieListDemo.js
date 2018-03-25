import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
 import MovieRequestService from './../network/MovieRequestService';

export default class MovieListDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={MovieRequestService()}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
