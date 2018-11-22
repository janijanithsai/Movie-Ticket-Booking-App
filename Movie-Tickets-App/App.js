import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Movies from "./src/movies";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return <Movies />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen
    //Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
