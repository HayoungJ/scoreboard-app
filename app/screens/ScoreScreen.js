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

  return (
    <SafeAreaView style={styles.container}>
      <Score score={scores.left} onPress={() => changeScore('left')} />
      <Menu accumulate={accumulate} />
      <Score score={scores.right} onPress={() => changeScore('right')} />
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
});

export default ScoreScreen;
