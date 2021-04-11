import React from 'react';
import { Title } from 'react-native-paper';
import { View } from 'react-native';

const AddIncome = () => (
    <View style={{ 
        flex: 1, 
        backgroundColor: '#673ab7',
        alignItems:"center" 
    }} >
      <Title style={{color:"#ffffff"}}>Add Income</Title>
    </View>
);

export default AddIncome;