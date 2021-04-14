import React, {useState,useEffect} from 'react';
import { Title, Button } from 'react-native-paper';
import { View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import {retrieveAll} from '../../Database/Account';

const Expenses = ({navigation}) =>{
  const [data,setData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(()=>{
    setData(retrieveAll('Expense'));
  },[isFocused])

  if(data[0] == undefined){
    return (<View></View>)
  }

  return(
    <View style={{ 
        flex: 1, backgroundColor: '#000000',
        alignItems:"center" 
    }} >
      <Title style={{color:"#ffffff"}}>Expenses</Title>
      <Button onPress={()=>navigation.navigate("AddExpense")}>Add Expense</Button>
    </View>
  );
}

export default Expenses;