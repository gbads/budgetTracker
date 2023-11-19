import { Text, TextInput, SafeAreaView } from "react-native";
import style from "../styles/style";


export default function InputField({ label, inputType, ismultiline }) {
    return (
        <SafeAreaView>
            <Text style={style.boxtext}>
                {label}
            </Text>
            {ismultiline ?
                <TextInput style={[style.boxinput, style.boxmultiline]} inputMode={inputType} multiline /> :
                <TextInput style={style.boxinput} inputMode={inputType} />}
        </SafeAreaView>
    )
};


