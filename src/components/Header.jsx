import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { getData, setError, setLoading } from "../redux/actions/WeatherAction";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSunmit = useCallback(() => {
    if (city.trim() === "") {
      return dispatch(setError("please enter city !!!"));
    }
    dispatch(setLoading());
    dispatch(getData(city));
    setCity('')
  },[city,dispatch])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={"city..."}
        placeholderTextColor="#fff"
        value={city}
        onChangeText={(v) => setCity(v)}
        onSubmitEditing={handleSunmit}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSunmit}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
    borderBottomColor: "#7f8c8d",
    borderBottomWidth: 1,
    paddingBottom: 30,
    flexDirection: "row-reverse",
  },
  input: {
    borderColor: "#f0f0f0",
    borderWidth: 0.2,
    width: "70%",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    color: "#ecf0f1",
  },
  btn: {
    backgroundColor:'#2c3e50',
    padding: 5,
    borderRadius: 10,
  },
});
