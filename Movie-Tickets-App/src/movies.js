import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { movies } from "./data";
import MoviePoster from "./moviePoster";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <View>
        <ScrollView>
          {movies.map((movie, index) => (
            <MoviePoster
              movie={movie}
              //onPress={this.props.handleClick}
              key={index}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
