import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import WeatherData from "./components/WeatherData";

const Weather = () => {
  return (
    <View style={styles.container}>
      <Header />
      <WeatherData />
    </View>
  );
};
export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e",
  },
});
