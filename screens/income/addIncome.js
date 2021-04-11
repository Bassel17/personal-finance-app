import React, {useState} from 'react';
import { Title, TextInput, Menu, Button ,Provider} from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import {addIncome} from '../../Database/Account';

const AddIncome = () => {

  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("0");
  const [currency,setCurrency] = useState("LBP");
  const [visible,setVisible] = useState(false)
  
  return (
    <Provider>
      <View style={styles.container}>
        <TextInput
          label="Source"
          value={source}
          onChangeText={setSource}
        />
        <View style={styles.column}>
          <TextInput
            label="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="number-pad"
            style={styles.input}
          />
          <Menu
            visible={visible}
            onDismiss={()=>setVisible(false)}
            anchor={<Button onPress={()=>setVisible(true)}>{currency}</Button>}>
            <Menu.Item onPress={() => {
              setCurrency("LBP")
              setVisible(false)
            }} title="LBP" />
            <Menu.Item onPress={() => {
              setCurrency("USD")
              setVisible(false)
            }} title="USD" />
          </Menu>
        </View>
        <Button onPress={()=>addIncome({
          amount:parseFloat(amount),
          currency,
          source
        })}>Add Income</Button>
      </View>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container:{
    padding:10,
    flexDirection:"column",
  },

  column:{
    flexDirection:"row",
    justifyContent:"space-between"
  },

  input:{
    width:"80%"
  }
});

export default AddIncome;