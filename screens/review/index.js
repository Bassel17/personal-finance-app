import React from 'react';
import { Title } from 'react-native-paper';
import { View } from 'react-native';

const Review = () => (
    <View style={{ 
        flex: 1, 
        backgroundColor: '#ff4081',
        alignItems:"center" 
    }} >
      <Title style={{color:"#ffffff"}}>Review</Title>
    </View>
);

export default Review;