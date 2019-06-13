import React, { Component } from 'react';
import { Modal, TouchableOpacity, View, Alert, StyleSheet, FlatList } from 'react-native';
import { Button, Icon, Text, Textarea, Form } from "native-base";
import { RkCard } from "react-native-ui-kitten";

interface Props {
    data: [];
    closeModal: Function;
    click_SelectItem: Function;
    pop: Function;
    click_Request: Function
}

export default class ModelTotalDevices extends Component<Props, any> {
    constructor ( props: any ) {
        super( props );
        this.state = ( {
            arr_DeviceInfo: []
        } )
    }


    componentWillReceiveProps = async ( nextProps: any ) => {
        let data = nextProps.data[ 0 ].data
        this.setState( {
            arr_DeviceInfo: data
        } )
    }


    //TODO: click_Item
    click_Item( item: any ) {
        Alert.alert(
            "Confirm",
            "Are you sure select " + item.deviceNo,
            [
                {
                    text: 'Ok', onPress: () => {
                        this.props.click_SelectItem( item.deviceNo );
                    }
                },
                { text: 'Cancel', onPress: () => console.log( 'CANCEL: Email Error Response' ) }
            ],
            { cancelable: true }
        )
    }


    render() {
        let data = this.props.data.length != 0 ? this.props.data : [];
        let arr_DeviceInfo = this.state.arr_DeviceInfo;
        return (
            <Modal
                transparent
                animationType="fade"
                visible={ data.length != 0 ? data[ 0 ].modalVisible : false }
                onRequestClose={ () =>
                    this.props.closeModal()
                }
            >
                <View style={ [
                    styles.modalBackground,
                    { backgroundColor: `rgba(0,0,0,0.4)` }
                ] }>
                    <View style={ styles.viewModelBody }>
                        <View style={ { flex: 0.4, alignItems: "center", justifyContent: "flex-start" } }>
                            <Text note style={ [ { textAlign: "center" } ] }>Select any one device</Text>
                        </View>
                        <View
                            style={ {
                                flex: 4
                            } }
                        >
                            <FlatList
                                data={
                                    arr_DeviceInfo
                                }
                                renderItem={ ( { item } ) => (
                                    <TouchableOpacity onPress={ () => this.click_Item( item ) }>
                                        <RkCard
                                            rkType="shadowed"
                                            style={ {
                                                flex: 1,
                                                borderRadius: 8,
                                                marginBottom: 10,
                                            } }
                                        >
                                            <View style={ { flex: 1, backgroundColor: "#ffffff", borderRadius: 8, margin: 10 } }>
                                                <View style={ { flex: 1, flexDirection: 'row', backgroundColor: "#ffffff", borderRadius: 8, } } >
                                                    <View style={ { flexDirection: "column", justifyContent: "center", flex: 1 } }>
                                                        <Text style={ [ { marginLeft: 10, fontSize: 16 } ] }>{ item.deviceNo }</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </RkCard>
                                    </TouchableOpacity>
                                ) }
                                keyExtractor={ item => item.id }
                                extraData={ this.state }
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create( {
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    viewModelBody: {
        flex: 0.7,
        margin: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#ffffff"
    }
} );