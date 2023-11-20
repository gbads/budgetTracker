import { View, Text, Button, SafeAreaView } from "react-native";
import s from "../styles/style";
import {InputExpense, Output} from '../components';

export default function BudgetScreen() {
    return (
        <SafeAreaView style={s.parent}>
            <InputExpense/>
            <Output/>
        </SafeAreaView>
    )
}