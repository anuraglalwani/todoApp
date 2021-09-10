import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/todoItem';
import Form from './components/Form';
import Sandbox from './components/Sandbox';

export default function App() {

  const[todos,setTodos]=useState([
    {title:"react native",key:1},
    {title:"task 2 ",key:2},
    {title:"task 3",key:3},
    {title:"task 4",key:4},
  ])

  function handlePress(id){
    setTodos((prevTodos)=>{
      return prevTodos.filter((todo)=>todo.key!==id);
    })
  }
  function addItem(item){

    if(item.length>3){

      setTodos((prevTodos)=>{
        return[...prevTodos,
         {title:item,key:Math.random().toString()}
       ]
      })
    }
    else
    {
      Alert.alert("OOPS!","To do list should has more than 3 characters",[
        {text:"Okay", onPress:()=> console.log("Alert cancelled") }
      ]);
    }
  
  }
   
  return (
    //<Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log("dismissed");
    }}>
      <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
           <Form addItem={addItem}/>
           <View style={styles.list}>
              <FlatList 
               data={todos}
               renderItem={({item})=>(
               <TodoItem item={item} handlePress={handlePress}/>
               )}
              />
       </View>
    </View>

    </View>
    </TouchableWithoutFeedback>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    flex:1,
   padding:40
  },
  list:{
    flex:1,
    marginTop:20,
    borderWidth:2,
    borderColor:"skyblue"
  }
});
