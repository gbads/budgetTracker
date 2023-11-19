import { Text, View, Image, Pressable } from "react-native";
import style from "../styles/style";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

// const query = await getDocs(collection(db, "expense"));

// console.log(query);
export default function InputExpense() {
  const outputArr = [];

  // query.forEach((doc) => {
  //   let docDetails = doc.data();

  //   outputArr.push({ id: doc.id, details: docDetails });
  // });

  return (
    <>
      {outputArr.map((item) => (
        <View key={item.id}>
          <Text>{item.details.allocation}</Text>
          <Text>{item.details.type}</Text>
          <Text>{item.details.amount}</Text>
          <Text>{item.details.description}</Text>
        </View>
      ))}
    </>
  );
}
