import React, {useEffect, useState} from 'react';
import {FAB, Title, Button, Text, Divider} from 'react-native-paper';
import {View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {retrieveAll} from '../../Database/Account';
import dayjs from 'dayjs';

const Income = ({navigation}) => {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  const IncomeEntry = ({title, amount, currency, createdAt}) => {
    return (
      <View
        style={{
          padding: 13,
          alignSelf: 'stretch',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
            }}>
            Cabbis Fulltime
          </Text>
          <Text>{dayjs(createdAt).fromNow()}</Text>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 21,
              color: '#5bbf59',
              fontWeight: 'bold',
            }}>
            {amount}
          </Text>
          <Text>{currency}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    setData(retrieveAll('Income'));
  }, [isFocused]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
      }}>
      {data.map(({source, amount, currency, createdAt}, i) => (
        <View
          style={{
            alignSelf: 'stretch',
          }}
          key={i}>
          <IncomeEntry
            onPress={() => console.log('henlo')}
            title={source}
            amount={amount}
            currency={currency}
            createdAt={createdAt}
          />
          <Divider />
        </View>
      ))}
      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: '#5bbf59',
        }}
        icon="plus"
        color="white"
        onPress={() => navigation.navigate('AddIncome')}
      />
    </View>
  );
};

export default Income;
