import React, { Component, PropTypes } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { defaultStyles } from "./styles";

// var poster = movies.map(node => node.poster);
// var title = movies.map(node => node.title);
// var genre = movies.map(node => node.genre);

const { width, height } = Dimensions.get("window");
//screen dimentions

const cols = 3,
  rows = 3;
//posters in each row and col

export default class MoviePoster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popUpIsOpen: props.popUpIsOpen,
      title: props.title,
      genre: props.genre,
      poster: props.poster
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.popUpIsOpen !== nextProps.popUpIsOpen) {
      this.setState({ popUpIsOpen: nextProps.popUpIsOpen });
    }
    if (this.state.title !== nextProps.title) {
      this.setState({ title: nextProps.title });
    }
    if (this.state.genre !== nextProps.genre) {
      this.setState({ genre: nextProps.genre });
    }
    if (this.state.poster !== nextProps.poster) {
      this.setState({ poster: nextProps.poster });
    }
  }

  //   handleClick = () => {
  //       this.setState = {
  //           popUpIsOpen = true
  //       }
  //   };

  // Component prop types

  render() {
    console.log(this.state.title);
    // const {
    //   movie,
    //   movie: { title, genre, poster },
    //   onOpen
    // } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.openMovie(
            this.state.title,
            this.state.genre,
            this.state.poster
          )
        }
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: this.state.poster }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {this.state.title}
        </Text>
        <Text style={styles.genre} numberOfLines={1}>
          {this.state.genre}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10
  },
  imageContainer: {
    flex: 1 // take up all available space
  },
  image: {
    borderRadius: 10, // rounded corners
    ...StyleSheet.absoluteFillObject // fill up all space in a container
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4
  },
  genre: {
    ...defaultStyles.text,
    color: "#BBBBBB",
    fontSize: 12,
    lineHeight: 14
  }
});
