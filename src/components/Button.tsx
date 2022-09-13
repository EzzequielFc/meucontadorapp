import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

// import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    name: string
}

const Button = ({name, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
        <Text style={styles.textButton}>
            {name}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DC1637",
        width: 143,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,

    },
    textButton: {
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Button;