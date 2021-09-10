import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

export default function Header (){

    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todo List </Text>
        </View>
      
    )

}
const styles= StyleSheet.create({
    header:{
        height:80,
        paddingTop:28,
        backgroundColor:"blue"
        
    },
    title:{
        textAlign:"center",
        fontSize:40,
        fontWeight:"bold"
    }
    
})