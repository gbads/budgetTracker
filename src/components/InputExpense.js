import {
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
import style from "../styles/style";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";


export default function InputExpense() {
  const [isExpense, setIsExpense] = useState(true);
  const toggleSwitch = () => setIsExpense((previousState) => !previousState);
  const [text, onChangeText] = useState("");
  const [amount, onChangeAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [personal, setPersonal] = useState(true);

  const cloudStorage = collection(db, "expense");
  const recentArrayAdd = {
    allocation: personal ? "Personal" : "Family",
    type: isExpense ? "Expense" : "Income",
    amount: amount !== 0 && amount,
    description: text !== "" && text,
  };
  async function addNew() {
    await addDoc(cloudStorage, recentArrayAdd);
  }

  return (
    <>
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
          <CurrencyInput
            style={style.input}
            value={amount}
            prefix="$"
            delimiter=","
            separator="."
            precision={2}
            minValue={0}
            onChangeValue={onChangeAmount}
          />
          <TextInput
            style={style.input}
            value={text}
            onChangeText={onChangeText}
          />
          <Pressable
            onPress={() => {
              if(text !== "" && amount !== 0) {
                addNew();
              }
              setShowModal(!showModal);
            }}
          >
            <Text>Done</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Refer to Radio Logic to change Firestore tables */}
      <View style={[style.spaceAround, style.container]}>
        <View style={style.radioButton}>
          <RadioButton
            value="option1"
            status={personal === true ? "checked" : "unchecked"}
            onPress={() => setPersonal(true)}
            color="#007BFF"
          />
          <Text style={style.radioLabel}>Personal</Text>
        </View>

        <View style={style.radioButton}>
          <RadioButton
            value="option2"
            status={personal === false ? "checked" : "unchecked"}
            onPress={() => setPersonal(false)}
            color="#007BFF"
          />
          <Text style={style.radioLabel}>Family</Text>
        </View>
      </View>
      <Pressable
        style={[style.pseudoBtn, style.container]}
        onPress={() => setShowModal(true)}
      >
        <Image style={style.add} source={require("../../assets/add.png")} />
        <Text style={style.paragraph}>Add Income/Expense</Text>
      </Pressable>
    </>
  );
}
