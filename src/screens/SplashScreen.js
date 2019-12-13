import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style = {styles.button}>
                <Text>Take me to my stash.</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style = {styles.signUp}>
                <Text style={styles.signUp}>Don't have an account yet? Click here to sign up!</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3D3B46',
        position: 'relative',
        width: '100%',
        height: '100%'  
    },

    button: {
        backgroundColor: '#9F95A3',
        color: '#3D3B46',
        justifyContent: 'center',
        alignItems: 'center'
    },

    signUp: {
        color: '#9F95A3',
        //fontFamily: 'Raleway-Regular',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default SplashScreen
