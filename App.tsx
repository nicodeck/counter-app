import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View, Animated } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const bounceAnim = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(bounceAnim, {
      toValue: 0.8,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(bounceAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Le compteur est à {counter}.</Text>
      <View style={styles.buttonsContainer}>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => setCounter(counter + 1)}
        >
          <Animated.View style={{ transform: [{ scale: bounceAnim }] }}>
            <Text style={styles.button}>+1</Text>
          </Animated.View>
        </Pressable>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => setCounter(0)}
        >
          <Animated.View style={{ transform: [{ scale: bounceAnim }] }}>
            <Text style={styles.button}>Reset</Text>
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
  },
  text: {},
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "white",
    borderColor: "black",
    borderWidth: 1,
  },
});
