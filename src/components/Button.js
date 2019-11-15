import React from 'react';
import { Button as CustomButton, Text } from 'native-base';

const Button = ({ onPress, children, styling, disabled, textStyling }) => {
  return (
    <CustomButton
      success
      style={[styles.buttonStyle, styling]}
      onPress={onPress}
      disabled={disabled}
    >
    <Text style={[styles.text, textStyling]} >{children}</Text>
    </CustomButton>
  );
};
export default Button;

const styles = {
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    //backgroundColor: '#52de97',
  },
  text: {
    fontFamily: 'Roboto-Bold',
  }
};

