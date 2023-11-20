import { Text, View, Image, Pressable } from "react-native";
import style from "../styles/style";
import { db } from "../../firebase";
import { query, onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect } from "react";



// console.log(query);
export default function InputExpense() {

const [outputArr, setOutputArr] = useState([]);


    const q = query(collection(db, "expense"));

    onSnapshot(q, (querySnapshot) =>{  
      let newEntries = [];

      querySnapshot.forEach((doc) => {
        let docDetails = doc.data();
        newEntries.push({ id: doc.id, details: docDetails });
      });
      setOutputArr(newEntries);
    })  

  return (
    <>
      {outputArr.map((item) => (
        <View key={item?.id}>
          <Text>{item?.details?.allocation}</Text>
          <Text>{item?.details?.type}</Text>
          <Text>{item?.details?.amount}</Text>
          <Text>{item?.details?.description}</Text>
        </View>
      ))}
    </>
  );
}
