import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    title: string,
    style: any,
    disabled: Boolean,
    click_Done: Function;
}

export default class FullLinearGradientButton extends Component<Props, any> {
    render = ( { children } = this.props ) => {
        return (
            <Button
                ViewComponent={ LinearGradient } // Don't forget this!
                containerStyle={ [ styles.btnDone, this.props.style ] }
                disabled={ this.props.disabled }
                onPress={ () => this.props.click_Done() }
                linearGradientProps={ {
                    colors: [ "#37A0DA", "#0071BC" ],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                } }
                title={ this.props.title }
            />
        );
    };
}

const styles = StyleSheet.create( {
    textWhite: {
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily: "FiraSans-SemiBold",
        alignSelf: "center",
    },
    btnDone: {
        margin: 5,
        height: 50,
        justifyContent: "center"
    }
} );
