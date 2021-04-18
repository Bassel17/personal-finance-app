import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  incomeEntryContainer: {
    alignSelf: 'stretch',
  },
  incomeEntry: {
    padding: 13,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleAndTimestampContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  amountAndCurrencyContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 21,
    color: '#5bbf59',
    fontWeight: 'bold',
  },
  incomeTitle: {
    fontSize: 18,
  },
  addActionButton: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#5bbf59',
  },
});
