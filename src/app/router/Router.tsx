import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "RoundTable/src/app/constant/Constants";
import {
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator
} from "react-navigation";
import ConfirmPasscodeScreen from "RoundTable/src/components/PasscodeScreen/ConfirmPasscodeScreen";
import PasscodeScreen from "RoundTable/src/components/PasscodeScreen/PasscodeScreen";


//TODO: Tabbar 
import HomeScreen from "RoundTable/src/components/TabbarScreen/HomeScreen/HomeScreen";
import SettingScreen from "RoundTable/src/components/TabbarScreen/SettingScreen/SettingScreen";


//TODO: StackNavigator
//TODO: StackNavigator:ONBoarding

// const OnBoardingStackNavigator = createStackNavigator(
//     {
//         ConfirmPasscodeScreen: {
//             screen: ConfirmPasscodeScreen,
//             navigationOptions: { header: null }
//         },
//         PasscodeScreen: {
//             screen: PasscodeScreen,
//             navigationOptions: { header: null }
//         }
//     },
//     {
//         initialRouteName: "ConfirmPasscodeScreen"
//     }
// );




//TODO: TabNavigator
//TODO: TabNavigator:TabNavigator

const TabNavigator = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen, //PaymentScreen,
            navigationOptions: {
                tabBarLabel: "Home", //localization("TabBarItem.Payment"),
                tabBarIcon: ( { tintColor } ) => (
                    <Icon name="home" color={ tintColor } size={ 22 } />
                ),

            }
        },
        SettingScreen: {
            screen: SettingScreen, //PaymentScreen,
            navigationOptions: {
                tabBarLabel: "Setting", //localization("TabBarItem.Payment"),
                tabBarIcon: ( { tintColor } ) => (
                    <Icon name="cog" color={ tintColor } size={ 22 } />
                ),

            }
        }
    },
    {
        initialRouteName: "HomeScreen",
        tabBarOptions: {
            showLabel: true,
            //swipeEnabled: true,
            showIcon: true,
            activeTintColor: colors.appColor,
            labelStyle: {
                fontSize: 11,
                fontFamily: "FiraSans-Medium"
            },
            style: {
                backgroundColor: "#ffffff"
            },
            tabStyle: {}
        }
    }
);


//TODO: RootNavigator
//TODO: RootNavigator:createRootNavigator
export const createRootNavigator = (
    signedIn = false,
    screenName = "PincodeNavigator"
) => {
    return createStackNavigator(
        {
            PasscodeNavigator: {
                screen: PasscodeScreen,
                navigationOptions: { header: null }
            },
            ConfirmPasscodeNavigator: {
                screen: ConfirmPasscodeScreen,
                navigationOptions: { header: null }
            },
            TabNavigator: {
                screen: TabNavigator,
                navigationOptions: { header: null }
            }
        },
        {
            initialRouteName: signedIn ? "PasscodeNavigator" : screenName
        }
    );
};

