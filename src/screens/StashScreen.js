import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const StashScreen = ({navigation}) => {
    
    
    return (
        <View style={styles.container}>
            <Text>Stash Screen</Text>
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

export default StashScreen;