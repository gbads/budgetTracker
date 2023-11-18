import {
  SafeAreaView,
  Text,
  Switch,
  View,
  Image,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import CurrencyInput from "react-native-currency-input";
import { RadioButton, Card } from "react-native-paper";
import style from "./src/styles/style";

export default function App() {
  const [input, setInput] = useState([]);
  const [isExpense, setIsExpense] = useState(true);
  const toggleSwitch = () => setIsExpense((previousState) => !previousState);
  const [expense, setExpense] = useState(true);
  const [text, onChangeText] = useState("");
  const [amount, onChangeAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [family, setFamily] = useState(false);

  console.log(input);
  return (
    <SafeAreaView style={style.parent}>
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View>
          <View style={[style.container, style.gap]}>
            <Text>Income</Text>
            <Switch
              trackColor={{ false: "#1CD521", true: "#E63009" }}
              thumbColor={"#fff"}
              activeThumbColor={"#fff"}
              ios_backgroundColor="#E5E5E5"
              onValueChange={toggleSwitch}
              value={isExpense}
            />
            <Text>Expense</Text>
          </View>
          <CurrencyInput style={style.input} value={amount} prefix="$" delimiter="," separator="." precision={2} minValue={0} onChangeValue={onChangeAmount} />
          <TextInput style={style.input} value={text} onChangeText={onChangeText} />
          <Pressable
            onPress={() => {
              setInput([...input, {
                personal: family ? 'false' : 'true',
                expense: expense ? 'true' : 'false',
                amount: amount !== 0 && amount,
                description: text !== "" && text
              }]);
              setShowModal(!showModal);
            }}
          >
            <Text>
              Done
            </Text>
          </Pressable>
        </View>
      </Modal>

      {/* Refer to Radio Logic to change Firestore tables */}
      <View style={[style.spaceAround, style.container]}>
        <View style={style.radioButton}>
          <RadioButton
            value="option1"
            status={family === false ? "checked" : "unchecked"}
            onPress={() => setFamily(false)}
            color="#007BFF"
          />
          <Text style={style.radioLabel}>Personal</Text>
        </View>

        <View style={style.radioButton}>
          <RadioButton
            value="option2"
            status={family === true ? "checked" : "unchecked"}
            onPress={() => setFamily(true)}
            color="#007BFF"
          />
          <Text style={style.radioLabel}>Family</Text>
        </View>
      </View>
      <Pressable
        style={[style.pseudoBtn, style.container]}
        onPress={() => setShowModal(true)}
      >
        <Image style={style.add} source={require("./assets/add.png")} />
        <Text style={style.paragraph}>Add Income/Expense</Text>
      </Pressable>

      {/* Output Component - set up using Redux or Firebase */}
      <View style={style.output}>
        {input.map((item, i) => {
          return (
            <View style={style.item} key={item[i]}>
              <Text>{item.family ? 'Family' : 'Personal'}</Text>
              <Text>{item.expense ? 'Expense' : 'Income'}</Text>
              <Text>{item.amount}</Text>
              <Text>{item.description}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
