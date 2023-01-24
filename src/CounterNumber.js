import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CounterNumber = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      {/* <Text>Counter</Text> */}
      <Text style={styles.output}>{count}</Text>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => {
          setCount(count + 10);
        }}
      >
        <Text style={styles.textStyle}>+10</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => {
          setCount(count - count);
        }}
      >
        <Text style={styles.textStyle}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => {
          return count > 0
            ? setCount(count - 10)
            : alert("no more decrement...!");
        }}
      >
        <Text style={styles.textStyle}>-10</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  output: {
    backgroundColor: "red",
    height: 50,
    width: 200,
    // display : "flex",
    margin: 80,
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    borderRadius: 10,
  },
  btnStyle: {
    margin: 20,
    padding: 5,
    backgroundColor: "#000",
    borderRadius: 15,
  },
  textStyle: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});

export default CounterNumber;