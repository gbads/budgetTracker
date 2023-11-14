import {
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

export default function Input() {
  const [input, setInput] = useState([]);
  const [isExpense, setIsExpense] = useState(true);
  const toggleSwitch = () => setIsExpense((previousState) => !previousState);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [text, onChangeText] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View>
          <View style={[styles.container, styles.gap ]}>
            <Text>Income</Text>
            <Switch
              trackColor={{ false: "#1CD521", true: "#E63009" }}
              thumbColor="#E5E5E5"
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

      <Pressable style={styles.container} onPress={() => setShowModal(true)}>
        <Image style={styles.add} source={require("../assets/add.png")} />
        <Text style={styles.paragraph}>Add Income/Expense</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
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

});
