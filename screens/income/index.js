import React from 'react';
import { Title ,Button} from 'react-native-paper';
import { View } from 'react-native';

const Income = ({navigation}) => (
    <View style={{ 
        flex: 1, 
        backgroundColor: '#673ab7',
        alignItems:"center" 
    }} >
      <Title style={{color:"#ffffff"}}>Income</Title>
      <Button onPress={()=>navigation.navigate("AddIncome")}>Add Income</Button>
    </View>
);

export default Income;