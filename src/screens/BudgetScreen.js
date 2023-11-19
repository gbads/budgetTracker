import { View, Text, Button, SafeAreaView } from "react-native";
import s from "../styles/style";
import InputExpense from "../components/InputExpense";
import Output from "../components/Output";

const BudgetScreen = () => {
    return (
        <SafeAreaView style={s.parent}>
            <InputExpense/>
            <Output/>
        </SafeAreaView>
    )
}

export default BudgetScreen;