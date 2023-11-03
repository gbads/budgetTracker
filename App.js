import { Text, SafeAreaView, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import Input from "./components/Input";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Input />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
