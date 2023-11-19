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
import InputExpense from "./src/components/InputExpense";
import style from "./src/styles/style";

export default function App() {
  return (
    <SafeAreaView style={style.parent}>
      <InputExpense />
    </SafeAreaView>
  );
}
