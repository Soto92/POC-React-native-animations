import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: width - 60,
    height: height / 1.5,
    borderRadius: 32,
    margin: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  flatList: {
    marginLeft: 6,
    marginRight: 6,
  },
  button: {
    backgroundColor: 'transparent',
    height: '100%',
    width: 30,
  },
});

export default styles;
