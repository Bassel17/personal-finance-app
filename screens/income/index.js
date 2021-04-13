import React, {useEffect,useState} from 'react';
import { Title ,Button, Text, Divider} from 'react-native-paper';
import { View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import {retrieveAll} from '../../Database/Account';

const Income = ({navigation}) => {

  const [data,setData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(()=>{
    setData(retrieveAll('Income'));
  },[isFocused])

  if(data[0] == undefined){
    return (<View></View>)
  }

  return (
    <View style={{ 
        flex: 1,
        alignItems:"center" 
    }} >
      {data.map((income,index)=>(
        <View key={index}>
          <Title>{income.source}</Title>
          <Text>{income.amount}</Text>
          <Text>{income.currency}</Text>
          <Divider/>
        </View>
      ))}
      <Button onPress={()=>navigation.navigate("AddIncome")}>Add Income</Button>
    </View>
  );
}

export default Income;