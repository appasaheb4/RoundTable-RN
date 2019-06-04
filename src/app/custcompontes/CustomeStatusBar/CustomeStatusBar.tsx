import React, { Component } from "react";
import {
    View,
    Platform,
    StatusBar
} from "react-native";
//TODO: Custome object  
//var utils = require( "Jewellery/src/app/constants/Utils" );
export default class CustomeStatusBar extends Component<any, any> {
    constructor ( props: any ) {
        super( props );
    }

    render() {
        //utils.getStatusBarHeight() //first 0
        return (
            <View
                style={ {
                    backgroundColor: this.props.backgroundColor,
                    height: Platform.OS === 'ios' && this.props.flagShowStatusBar == true ? 20 : 20,
                } }>
                <StatusBar
                    barStyle={ this.props.barStyle }
                    backgroundColor={ this.props.backgroundColor }
                    translucent={ true }
                />
            </View>
        );
    }
}  
