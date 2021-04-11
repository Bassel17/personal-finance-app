import React from 'react';
import { Title } from 'react-native-paper';
import { View } from 'react-native';

const Income = () => (
    <View style={{ 
        flex: 1, 
        backgroundColor: '#673ab7',
        alignItems:"center" 
    }} >
      <Title style={{color:"#ffffff"}}>Income</Title>
    </View>
);

export default Income;