import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const WeatherData = () => {
  const { weather } = useSelector((state) => state);
  const { loading, error, data } = weather;

  const fahrenheit =
    data && ((data?.main?.temp * 1.8 - 459.67).toFixed(2) || "0");
  const celsius = data && ((data?.main?.temp - 273.15).toFixed(2) || "0");
  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <Text style={{ color: "red", textAlign: "center" }}>Loading...</Text>
      )}
      {error ? (
        <Text style={{ color: "orange", textAlign: "center" }}>{error}</Text>
      ) : null}
      {data !== null ? (
        <View style={styles.container} onStartShouldSetResponder={() => true}>
          <ScrollView style={styles.containerInner}>
            <Text style={styles.title}>
              {data?.name} - {data?.sys?.country}
            </Text>
            <View style={styles.box}>
              <Text style={styles.boxLabel}>
                {data?.weather[0]?.description}
              </Text>
              <Image
                style={styles.image}
                source={{
                  uri: `http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`,
                }}
              />
            </View>
            <View style={styles.box}>
              <Text style={styles.boxLabel}>Temp</Text>
              <View style={styles.tempContainer}>
                <Text style={styles.boxText}>{data?.main?.temp}K</Text>
                <Text style={styles.boxText}>{fahrenheit}&#8457;</Text>
                <Text style={styles.boxText}>{celsius}&#8451;</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxLabel}>Humidity</Text>
              <Text style={styles.boxText}>{data?.main?.humidity}%</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxLabel}>Pressure</Text>
              <Text style={styles.boxText}>{data?.main?.pressure}hPa</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxLabel}>Wind</Text>
              <Text style={styles.boxText}>{data?.wind?.speed} m/s</Text>
            </View>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default WeatherData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInner: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius:5
  },
  boxLabel: {
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 40,
    alignContent: "center",
  },
  tempContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },
});
