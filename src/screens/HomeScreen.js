import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        position: 'relative',
        width: '100%',
        height: '100%'  
    },
})

export default HomeScreen;