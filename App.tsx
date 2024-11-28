import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Le compteur est à {counter}.</Text>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={() => setCounter(counter + 1)}>
          <Text style={styles.button}>+1</Text>
        </Pressable>
        <Pressable onPress={() => setCounter(counter + 10)}>
          <Text style={styles.button}>+10</Text>
        </Pressable>
        <Pressable onPress={() => setCounter(counter + 50)}>
          <Text style={styles.button}>+50</Text>
        </Pressable>
        <Pressable onPress={() => setCounter(0)}>
          <Text style={styles.button}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
  },
  text: {},
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "black",
    borderColor: "black",
    borderWidth: 1,
  },
});
