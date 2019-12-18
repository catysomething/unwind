import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
    
    
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>

            <Button 
                title="Stash"
            />
            <Button 
                title="Counter"
                onPress = {() => navigation.navigate('Counter')}
            />
            <Button
                title="Projects"
            />
            <Button 
                title="Shopping List"
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

export default HomeScreen;