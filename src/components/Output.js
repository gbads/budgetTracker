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
    <View style={style.outputView}>
      {outputArr.map((item) => (
        <View key={item?.id} style={style.outputItem}>
          <Text style={style.item}>{item?.details?.allocation}</Text>
          <Text style={style.item}>{item?.details?.type}</Text>
          <Text style={style.item}>{item?.details?.amount}</Text>
          <Text style={style.item}>{item?.details?.description}</Text>
        </View>
      ))}
    </View>
  );
}
