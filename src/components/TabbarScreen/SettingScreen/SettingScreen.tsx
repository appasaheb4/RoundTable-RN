import React, { Component } from 'react';
import { Platform, StyleSheet, View, FlatList, AsyncStorage, SafeAreaView } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Item,
    Input,
    Button,
    Left,
    Right,
    Body,
    Text,
    List, ListItem,
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RkCard } from "react-native-ui-kitten";
import IconFontAwe from "react-native-vector-icons/FontAwesome";

//TODO: Custome Object 
import { apiary, asyncStorageKeys } from "RoundTable/src/app/constant/Constants";

interface Props { }
export default class SettingScreen extends Component<Props, any> {
    constructor ( props: any ) {
        super( props )
        this.state = ( {
            data: []
        } )
    }

    async componentWillMount() {
        let selectDeiceInfo = await AsyncStorage.getItem( asyncStorageKeys.selectDeiceInfo );
        selectDeiceInfo = JSON.parse( selectDeiceInfo );
        // console.log( { selectDeiceInfo } );
        let data = [ {
            title: "Selected Device",
            subTitle: selectDeiceInfo.deviceNo
        } ];
        this.setState( {
            data
        } );
    }

    render() {
        let { data } = this.state;
        return (
            <Container>
                <SafeAreaView style={ styles.container }>
                    <KeyboardAwareScrollView
                        enableAutomaticScroll
                        automaticallyAdjustContentInsets={ true }
                        keyboardOpeningTime={ 0 }
                        enableOnAndroid={ true }
                        contentContainerStyle={ { flexGrow: 1 } }
                    >
                        <View style={ { flex: 0.05, marginLeft: 10, marginTop: 30 } }>
                            <Text style={ [ { color: "#000000", fontSize: 28, marginLeft: 0 } ] }>Settings</Text>
                        </View>
                        <View style={ { flex: 1 } }>
                            <FlatList
                                data={ data }
                                showsVerticalScrollIndicator={ false }
                                scrollEnabled={ false }
                                renderItem={ ( { item } ) => (
                                    <RkCard
                                        rkType="shadowed"
                                        style={ {
                                            flex: 1,
                                            borderRadius: 8,
                                            marginLeft: 8,
                                            marginRight: 8,
                                            marginBottom: 4,
                                        } }
                                    >
                                        <View
                                            rkCardHeader
                                            style={ {
                                                flex: 1,
                                            } }
                                        >
                                            <View style={ { flex: 0.2, justifyContent: "center", alignItems: "flex-start" } }>
                                                <IconFontAwe
                                                    name="mobile"
                                                    color="#BABABA"
                                                    size={ 35 }
                                                />
                                            </View>
                                            <View style={ { flex: 1, flexDirection: "column" } }>
                                                <Text
                                                    style={ [ { fontSize: 12 } ] }
                                                >
                                                    { item.title }
                                                </Text>
                                                <Text note numberOfLines={ 1 } style={ { fontSize: 11 } }>{ item.subTitle }</Text>
                                            </View>
                                            <View style={ { flex: 0.2, justifyContent: "center", alignItems: "flex-end" } }>
                                                <IconFontAwe
                                                    name="chevron-right"
                                                    color="#BABABA"
                                                    size={ 20 }
                                                />
                                            </View>
                                        </View>
                                    </RkCard>

                                ) }
                                keyExtractor={ ( item, index ) => index }
                            />
                        </View>
                        <View>
                            <Text note style={ { textAlign: "center" } }>© 2019  All Rights Reserved. USkillShare | { '\n' }http://skillshare.web44.net</Text>
                        </View>
                    </KeyboardAwareScrollView>
                </SafeAreaView>
            </Container>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1
    }
} );