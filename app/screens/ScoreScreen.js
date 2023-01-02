import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

import Score from '../components/Score';

const ScoreScreen = () => {
  let lastTap = null;
  let holdSingleTap = null;
  const [scores, setScores] = useState({ left: 0, right: 0 });
  const [accumulate, setAccumulate] = useState({ left: 0, right: 0 });

  const changeScore = type => {
    const now = Date.now();

    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      clearTimeout(holdSingleTap);
      setScores({
        ...scores,
        [type]: scores[type] - 1 < 0 ? 0 : scores[type] - 1,
      });
    } else {
      holdSingleTap = setTimeout(() => {
        setScores({
          ...scores,
          [type]: scores[type] + 1,
        });
      }, DOUBLE_PRESS_DELAY + 10);
      lastTap = now;
    }
  };

  const handlePlayFinsih = () => {
    setAccumulate({
      left: 0,
      right: 0,
    });
    setScores({
      left: 0,
      right: 0,
    });
  };

  const handleSetFinish = () => {
    let left = 0;
    let right = 0;
    if (scores.left > scores.right) {
      left = 1;
    } else if (scores.right > scores.left) {
      right = 1;
    }

    setAccumulate({
      left: accumulate.right + right,
      right: accumulate.left + left,
    });
    setScores({
      left: 0,
      right: 0,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Score
        style={styles.leftScore}
        score={scores.left}
        onPress={() => changeScore('left')}
      />
      <Menu
        accumulate={accumulate}
        handlePlayFinsih={handlePlayFinsih}
        handleSetFinish={handleSetFinish}
      />
      <Score
        style={styles.rightScore}
        score={scores.right}
        onPress={() => changeScore('right')}
      />
    </SafeAreaView>
  );
};

const DOUBLE_PRESS_DELAY = 300;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: '#fff',
  },
  leftScore: {
    backgroundColor: '#ffe2ed',
  },
  rightScore: {
    backgroundColor: '#cce8f4',
  },
});

export default ScoreScreen;
