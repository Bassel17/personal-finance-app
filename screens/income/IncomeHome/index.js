import React, {useEffect, useState} from 'react';
import {FAB, Title, Button, Text, Divider} from 'react-native-paper';
import {View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {retrieveAll} from '../../../Database/Account';
import styles from './style';
import dayjs from 'dayjs';

const Income = ({navigation}) => {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  const IncomeEntry = ({title, amount, currency, createdAt}) => {
    return (
      <View style={styles.incomeEntry}>
        <View style={styles.titleAndTimestampContainer}>
          <Text style={styles.incomeTitle}>{title}</Text>
          <Text>{dayjs(createdAt).fromNow()}</Text>
        </View>
        <View style={styles.amountAndCurrencyContainer}>
          <Text style={styles.amount}>{amount}</Text>
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
        <View style={styles.incomeEntryContainer} key={i}>
          <IncomeEntry
            title={source}
            amount={amount}
            currency={currency}
            createdAt={createdAt}
          />
          <Divider />
        </View>
      ))}
      <FAB
        style={styles.addActionButton}
        icon="plus"
        color="white"
        onPress={() => navigation.navigate('AddIncome')}
      />
    </View>
  );
};

export default Income;
