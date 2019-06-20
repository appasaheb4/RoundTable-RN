import React, { Component } from "react";
import {
    View,
    AsyncStorage,
    Image,
    StyleSheet,
    ImageBackground,
    Text,
    Alert,
    StatusBar,
    Animated,
    Easing
} from "react-native";
import { colors, images, asyncStorageKeys } from "RoundTable/src/app/constant/Constants";


interface Props {
    onComplited: Function;
}

export default class LaunchingScreen extends Component<Props, any> {


    async componentDidMount() {
        let value = await AsyncStorage.getItem( asyncStorageKeys.flag_Pincode );
        let status = JSON.parse( value );
        setTimeout( () => {
            if ( status ) {
                this.props.onComplited( false, "PasscodeNavigator" );
            }
            else {
                this.props.onComplited( false, "ConfirmPasscodeNavigator" );
            }
        }, 1000 );
    }

    render() {
        return (
            <View style={ styles.container }>
                <StatusBar hidden />
                <ImageBackground
                    source={ images.appBackgound }
                    style={ styles.backgroundImage }
                    imageStyle={ {
                        resizeMode: "stretch" // works only here!
                    } }
                >
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create( {
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
} );
