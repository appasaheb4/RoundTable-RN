import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {
    accelerometer,
    gyroscope,
    barometer,
    magenetometer,
    setUpdateIntervalForType,
    SensorTypes
} from "react-native-sensors";
import { map, filter } from "rxjs/operators";
var io = require( "socket.io-client/dist/socket.io" );

//TODO: Custome Compontes
import ModelTotalDevices from 'RoundTable/src/app/custcompontes/Model/ModelTotalDevices/ModelTotalDevices';

//TODO:  Custome Object
import { asyncStorageKeys } from "RoundTable/src/app/constant/Constants";


interface Props { }
export default class HomeScreen extends Component<Props, any> {
    constructor ( props: any ) {
        super( props )
        this.state = ( {
            x: 0,
            y: 0,
            z: 0,
            arr_ModelTotalDevices: []
        } )
        this.socket = io( 'http://round.cmshuawei.com:80', { jsonp: false } );

    }
    async componentDidMount() {
        let selectDeiceInfo = await AsyncStorage.getItem( asyncStorageKeys.selectDeiceInfo );
        if ( selectDeiceInfo == null ) {
            this.setState( {
                arr_ModelTotalDevices: [
                    {
                        modalVisible: true
                    }
                ]
            } )
        }

        const subscription = accelerometer.subscribe( ( { x, y, z } ) => {
            console.log( { x, y, z } )
            this.setState( {
                x, y, z
            } )
            if ( z <= 2 ) {
                this.socket.emit( 'videoPlay', 'Hello world!' );
                console.log( 'call' );

            } else {
                console.log( 'dont call' );
            }
        }
        );
        setUpdateIntervalForType( SensorTypes.accelerometer, 1000 );
    }

    emit() {
        this.socket.send( "videoPlay" )
    }

    //TODO:  click_SelectItem
    click_SelectItem( item: any ) {
        AsyncStorage.setItem(
            asyncStorageKeys.selectDeiceInfo,
            item
        );
    }


    render() {
        let { x, y, z } = this.state;
        return (
            <View style={ styles.container }>
                <Text >{ "x : " + x + "\n y: " + y + "\n z: " + z }</Text>
                <ModelTotalDevices data={ this.state.arr_ModelTotalDevices }
                    click_SelectItem={ ( item ) => {
                        this.setState( {
                            arr_ModelTotalDevices: [
                                {
                                    modalVisible: false
                                }
                            ]
                        } )
                        this.click_SelectItem( item )
                    } } />
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