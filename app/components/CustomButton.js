import React from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';

const CustomButton = ({ style, label, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={style}>{label}</Text>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;
