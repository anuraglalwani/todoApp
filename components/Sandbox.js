import React from 'react';
import { StyleSheet,View ,Text} from 'react-native';

export default function Sandbox (){

    return(
       <View style={styles.container}>
        <Text style={styles.text1}> Text 1</Text>
        <Text style={styles.text2}> Text 2</Text>
        <Text style={styles.text3}> Text 3</Text>
        <Text style={styles.text4}> Text 4</Text>
       </View>

    )

}
const styles= StyleSheet.create({

    container:{
        paddingTop:30,
        flexDirection:"row",
        justifyContent:"space-around",
        height:"100%",
        backgroundColor:"#ddd",
        alignItems:"center"
    },
   text1:{
       flex:1,
     backgroundColor:"pink"
   },
   text2:{
    flex:7,
    backgroundColor:"green",
    alignSelf:"flex-end"
   },
   text3:{
    flex:9,
    backgroundColor:"orange"
   },
   text4:{
    flex:19,
    backgroundColor:"violet",
    alignSelf:"flex-start"
   }
});