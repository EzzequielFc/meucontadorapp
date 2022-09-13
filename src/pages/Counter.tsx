import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/Button';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(prevState => prevState + 1);
    }

    function decrementCounter() {
        if(counter === 0) return;
        setCounter(prevState =>  prevState - 1);
    }

    function resetCounter() {
        setCounter(0);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Meu Contador
            </Text>

            <Text style={styles.subtitle}>
                Simples contador em RN
            </Text>

            <View style={styles.content}>
                <Text style={styles.counter}>
                    {counter}
                </Text>

                <View style={styles.containerButton}>
                    <Button name='-' onPress={decrementCounter}/>
                    <Button name='+' onPress={incrementCounter} />
                </View>
            </View>

            <Button name='Reset' onPress={resetCounter}/>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#EFFBFF'
    },
    title: {
        fontSize: 40,
    },
    subtitle: {
        marginTop: 32,
    },
    counter: {
        fontSize: 80,
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {
        marginVertical: 60,
        alignItems: "center",
        justifyContent: 'center'
    }
})

export default Counter;