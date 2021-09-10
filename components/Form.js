import React, { useState } from 'react';
import { Button, StyleSheet, TextInput,View } from 'react-native';

export default function Form ({addItem}){
    const [item,setItem]=useState("");

    return(
        <View>
        <TextInput style={styles.input}
           onChangeText={(value)=>setItem(value)}
           />
        <Button title="add item" onPress={()=>addItem(item)}/>
        </View>
      
    )

}
const styles= StyleSheet.create({
     input:{
         borderWidth:2,
         borderColor:"#ddd",
         borderBottomWidth:1,
         paddingVertical:6,
         paddingHorizontal:8
        

     }
})