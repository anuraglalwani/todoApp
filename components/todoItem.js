import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
export default function TodoItem ({item,handlePress}){

    return(
          <TouchableOpacity onPress={()=>handlePress(item.key)}>
          <View style={styles.item}>
            <Text style={styles.textInput}>{item.title}</Text>
            <MaterialIcons  name="delete" size={18} color="#333"/>
          </View>
             
          </TouchableOpacity>
        

    )
}
const styles= StyleSheet.create({
   item:{
       padding:16,
       marginTop:16,
       borderColor:"#bbb",
       borderWidth:1,
       borderStyle:"dashed",
       borderRadius:1,
       flexDirection:"row",
       borderRadius:10
   },
   textInput:{
       marginRight:15
   }
})