import React from 'react';
import { Title } from 'react-native-paper';
import { View } from 'react-native';

const Expenses = () => (
    <View style={{ 
        flex: 1, backgroundColor: '#000000',
        alignItems:"center" 
    }} >
      <Title style={{color:"#ffffff"}}>Expenses</Title>
    </View>
);

export default Expenses;