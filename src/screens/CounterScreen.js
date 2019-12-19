import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const CounterScreen = () => {
    const[counter, setCounter] = useState(0);

    return (
        <View>
            <Button 
                title = "Increase" 
                onPress = {() => {
                    setCounter(counter + 1);
                }}
            />
            <Button 
                title = "Decrease" 
                onPress = {() => {
                    setCounter(counter - 1);
                }}
            />
            <Text>Current Count: {counter}</Text>
            <Button
                title="RESET"
                onPress = {() => {
                    Alert.alert(
                        'Confirm Reset',
                        'Reset count to zero?',
                        [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {text: 'OK', onPress: () => setCounter(counter - counter)},
                        ],
                        {cancelable: false},
                      );
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAF8',
        position: 'relative',
        width: '100%',
        height: '100%'  
    },
        button: {
        color: '#9F95A3',
    }
})

export default CounterScreen;