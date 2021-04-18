import React from 'react';
import Main from './naviagtion/main';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AddIncome, AddExpense} from './screens';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Main}
        />
        <Stack.Screen name="AddIncome" component={AddIncome} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
