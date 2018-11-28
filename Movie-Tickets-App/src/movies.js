import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { movies } from "./data";
import MoviePoster from "./moviePoster";
import MoviePopup from "./moviePopup";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupIsOpen: false,
      title: "",
      genre: "",
      poster: "",
      days: "",
      time: "",
      chosenDay: 0,
      chosenTime: null
    };
    //this.openMovie = this.openMovie.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  openMovie = (title, genre, poster, days) => {
    this.setState({
      popupIsOpen: true,
      title: title,
      genre: genre,
      poster: poster,
      days: days
    });
  };

  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
      chosenDay: 0,
      chosenTime: null
    });
  };

  chooseDay = day => {
    this.setState({
      chosenDay: day
    });
  };

  chooseTime = time => {
    this.setState({
      chosenTime: time
    });
  };

  render() {
    console.log(this.state.title);
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
          title={this.state.title}
          genre={this.state.genre}
          poster={this.state.poster}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeMovie}
          chosenDay={this.state.chosenDay}
          chosenTime={this.state.chosenTime}
          onChooseDay={this.chooseDay}
          onChooseTime={this.chooseTime}
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
