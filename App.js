import {
  SafeAreaView,
  Text,
  Switch,
  View,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import { RadioButton, Card } from "react-native-paper";

export default function App() {
  const [input, setInput] = useState([]);
  const [isExpense, setIsExpense] = useState(true);
  const toggleSwitch = () => setIsExpense((previousState) => !previousState);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [text, onChangeText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [family, setFamily] = useState(false);

  return (
    <SafeAreaView style={styles.parent}>
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View>
          <View style={[styles.container, styles.gap]}>
            <Text>Income</Text>
            <Switch
              trackColor={{ false: "#1CD521", true: "#E63009" }}
              ios_backgroundColor="#E5E5E5"
              onValueChange={toggleSwitch}
              value={isExpense}
            />
            <Text>Expense</Text>
          </View>
          <TextInput style={styles.input} onChangeText={onChangeText} />
          <Pressable
            onPress={() => {
              setInput([...input, text]);
              setShowModal(!showModal);
            }}
          >
            <Text>
              {console.log(input)}
              Submit
            </Text>
          </Pressable>
        </View>
      </Modal>

      {/* Refer to Radio Logic to change Firestore tables */}
      <View style={[styles.spaceAround, styles.container]}>
        <View style={styles.radioButton}>
          <RadioButton
            value="option1"
            status={family === false ? "checked" : "unchecked"}
            onPress={() => setFamily(false)}
            color="#007BFF"
          />
          <Text style={styles.radioLabel}>Personal</Text>
        </View>

        <View style={styles.radioButton}>
          <RadioButton
            value="option2"
            status={family === true ? "checked" : "unchecked"}
            onPress={() => setFamily(true)}
            color="#007BFF"
          />
          <Text style={styles.radioLabel}>Family</Text>
        </View>
      </View>
      <Pressable
        style={[styles.pseudoBtn, styles.container]}
        onPress={() => setShowModal(true)}
      >
        <Image style={styles.add} source={require("./assets/add.png")} />
        <Text style={styles.paragraph}>Add Income/Expense</Text>
      </Pressable>

      {/* Output Component - set up using Redux or Firebase */}
      <View style={styles.output}>
        {input.map((item, i) => {
          return (
            <View style={styles.item} key={item[i]}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  output: {
    flex: 2,

  },
  item: {

  },
  paragraph: {
    margin: 0,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  add: {
    height: 30,
    width: 30,
  },
  gap: {
    gap: 5,
  },
  spaceAround: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  pseudoBtn: {
    borderRadius: 8,
    backgroundColor: "white",
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});
