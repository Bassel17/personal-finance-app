import React from 'react';
import { Title, Button } from 'react-native-paper';
import { View } from 'react-native';

const Expenses = ({navigation}) => (
    <View style={{ 
        flex: 1, backgroundColor: '#000000',
        alignItems:"center" 
    }} >
      <Title style={{color:"#ffffff"}}>Expenses</Title>
      <Button onPress={()=>navigation.navigate("AddExpense")}>Add Expense</Button>
    </View>
);

export default Expenses;