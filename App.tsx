import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Counter from './Counter';

export default function App() {
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {counters.map((counter, index) => (
            <Counter key={index} />
          ))}
        </ScrollView>
        <Pressable onPress={addCounter} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "black",
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
  },
});
