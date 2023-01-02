import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

const Score = ({ style, score, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{score}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 80,
    fontWeight: '500',
    color: '#000',
    align: 'center',
  },
});

export default Score;
