import React, {useRef} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

import styles from './style';

const CardList = props => {
  const list = useRef(null);
  const renderItem = item => {

    const previous = item.id === 0 ? 3 : (item.id) - 1;;
    const next = item.id === (props.data.length - 1) ? 0 : (item.id) + 1;

    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() =>
            list.current.scrollToIndex({index: previous, animated: true})
          }>
            <View style={styles.button}/>
        </TouchableOpacity>

        <Text>{item.title}</Text>

        <TouchableOpacity
          onPress={() =>
            list.current.scrollToIndex({index: next, animated: true})
          }>
            <View style={styles.button}/>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        ref={list}
        style={styles.flatList}
        horizontal={true}
        initialScrollIndex={1}
        data={props.data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CardList;
