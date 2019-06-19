import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage, Alert } from 'react-native';
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
import { apiary, asyncStorageKeys } from "RoundTable/src/app/constant/Constants";
import ApiManager from "RoundTable/src/app/manager/ApiManager/ApiManager";


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
        // this.socket = SocketIOClient( 'http://round.cmshuawei.com:80' );
        // this.socket.on( "update", () => {
        //     this.get_Data();
        // } );
    }

    async  componentDidMount() {


    }

    async componentWillMount() {
        var resGetAllDevices = await ApiManager.getAllData( apiary.getRemainingDevice );
        resGetAllDevices = resGetAllDevices.data;
        let selectDeiceInfo = await AsyncStorage.getItem( asyncStorageKeys.selectDeiceInfo );
        if ( resGetAllDevices.length == 0 ) {
            Alert.alert(
                "Ohh!",
                "Please contact to admin.(All devies already used.)",
                [
                    {
                        text: 'Ok', onPress: () => {
                            console.log( 'ok' );
                        }
                    }
                ],
                { cancelable: true }
            )
        } else if ( resGetAllDevices.length != 0 && selectDeiceInfo == null ) {
            this.setState( {
                arr_ModelTotalDevices: [
                    {
                        modalVisible: true,
                        data: resGetAllDevices
                    }
                ]
            } )
        }
        var socket = io.connect( 'http://round.cmshuawei.com:80' );
        selectDeiceInfo = JSON.parse( selectDeiceInfo );
        let temp = [ {
            deviceNo: selectDeiceInfo.deviceNo
        } ];
        console.log( { temp } );
        this.sessionValueShow( temp );
    }
    //TODO:  click_SelectItem
    click_SelectItem( item: any ) {
        AsyncStorage.setItem(
            asyncStorageKeys.selectDeiceInfo,
            JSON.stringify( item )
        );
        let selectDeiceInfo = JSON.parse( item );
        let temp = [ {
            deviceNo: selectDeiceInfo.deviceNo
        } ];
        this.sessionValueShow( temp );
    }

    sessionValueShow( temp: any ) {
        console.log( { temp } );
        var socket = io.connect( 'http://round.cmshuawei.com:80' );
        const subscription = accelerometer.subscribe( ( { x, y, z } ) => {
            // console.log( { x, y, z } )
            this.setState( {
                x, y, z
            } )
            if ( z <= 2 ) {
                console.log( { temp } );
                socket.emit( "videoPlay", temp );
            } else {
                socket.emit( "stopPlay", temp );
            }
        }
        );
        setUpdateIntervalForType( SensorTypes.accelerometer, 1000 );
    }

    render() {
        let { x, y, z } = this.state;
        return (
            <View style={ styles.container }>
                <Text >{ "x : " + x + "\n y: " + y + "\n z: " + z }</Text>
                <ModelTotalDevices data={ this.state.arr_ModelTotalDevices }
                    click_SelectItem={ ( item: any ) => {
                        this.setState( {
                            arr_ModelTotalDevices: [
                                {
                                    modalVisible: false,
                                    data: []
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