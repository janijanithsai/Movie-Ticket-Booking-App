import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { movies } from "./data";
import MoviePoster from "./moviePoster";
import MoviePopup from "./moviePopup";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupIsOpen: false
    };
    //this.openMovie = this.openMovie.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  openMovie = () => {
    this.setState({
      popupIsOpen: true
    });
  };

  closeMovie = () => {
    this.setState({
      popupIsOpen: false
    });
  };

  render() {
    console.log(this.state.popupIsOpen);
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {movies.map((movie, index) => (
            <MoviePoster
              title={movie.title}
              genre={movie.genre}
              poster={movie.poster}
              openMovie={this.openMovie}
              key={index}
              popupIsOpen={this.state.popupIsOpen}
            />
          ))}
        </ScrollView>
        <MoviePopup
          movie={this.state.movie}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeMovie}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20 // start below status bar
  },
  scrollContent: {
    flexDirection: "row", // arrange posters in rows
    flexWrap: "wrap" // allow multiple rows
  }
});
