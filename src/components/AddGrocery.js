import { Text, SafeAreaView } from "react-native";
import style from "../styles/style";
import InputField from "./InputField";

export default function AddGrocery() {
    return (
        <SafeAreaView style={style.formcontainer}>
            <Text style={style.header}>Add Grocery</Text>
            <InputField label="Name" inputType="text" />
            <InputField label="Qty" inputType="numeric" />
            <InputField label="Description" inputType="text" ismultiline={true} />
        </SafeAreaView>
    )
}
