/**
 * @format
 */
import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createAppContainer } from "react-navigation";
import LaunchingScreen from 'RoundTable/src/components/LaunchingScreen/LaunchingScreen';
import { createRootNavigator } from "RoundTable/src/app/router/Router";


export default class RoundTable extends Component
{
    constructor ( props )    
    {
        super( props );
        this.state = {
            status: true,
            isStartPage: "PasscodeNavigator"
        };
    }


    onComplited ( status, pageName )
    {
        try
        {
            this.setState( {
                status: status,
                isStartPage: pageName
            } );
        } catch ( e )
        {
            console.log( {
                e
            } );
        }
    }

    render ()
    {
        const Layout = createRootNavigator(
            this.state.status,
            this.state.isStartPage
        );
        const AppContainer = createAppContainer( Layout );
        return this.state.status ? (
            <LaunchingScreen
                onComplited={ ( status: boolean, pageName: string ) =>
                    this.onComplited( status, pageName )
                }
            />
        ) : (
                <AppContainer />
            );
    }
}

console.disableYellowBox = true;
AppRegistry.registerComponent( appName, () => RoundTable );
