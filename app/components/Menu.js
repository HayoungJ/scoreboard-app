import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './CustomButton';

const Menu = ({ accumulate, handlePlayFinsih, handleSetFinish }) => {
  return (
    <View style={styles.container}>
      <View style={styles.accumulate}>
        <Text style={[styles.score, styles.leftScore]}>{accumulate.left}</Text>
        <Text style={[styles.score, styles.rightScore]}>
          {accumulate.right}
        </Text>
      </View>
      <View style={styles.buttons}>
        <CustomButton
          style={styles.button}
          label="세트 종료"
          onPress={handleSetFinish}
        />
        <CustomButton
          style={styles.button}
          label="경기 종료"
          onPress={handlePlayFinsih}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    backgroundColor: '#dedede',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  accumulate: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  score: {
    flex: 1,
    lineHeight: 60,
    fontWeight: '700',
    fontSize: 20,
    color: '#fefefe',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 1,
  },
  leftScore: {
    backgroundColor: '#dc143c',
  },
  rightScore: {
    backgroundColor: '#3e91b5',
  },
  buttons: {
    marginBottom: 10,
  },
  button: {
    flexBasis: 'auto',
    lineHeight: 30,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default Menu;
