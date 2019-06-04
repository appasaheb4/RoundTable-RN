import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

interface Props { }
export default class SettingScreen extends Component<Props, any> {
    render() {
        return (
            <View style={ styles.container }>
                <Text>Welcome to React Native!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
} );