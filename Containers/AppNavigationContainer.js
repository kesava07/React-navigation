import React, { Component } from 'react';
import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';
import Welcome from '../Screens/WelcomeScreen';
import Feed from '../Screens/DashboardScreens/Feed/Feed';
import Settings from '../Screens/DashboardScreens/Settings';
import Profile from '../Screens/DashboardScreens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Accounts from '../Screens/Accounts/Accounts';
import Details from '../Screens/DashboardScreens/Feed/Details';

export default class AppNavigationContainer extends Component {
    render() {
        return <AppConatiner />
    }
};

const DashboardtabNavigator = createBottomTabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon size={20} name={'ios-home'} color={tintColor} />
            )
        },
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon size={20} name={'md-cog'} color={tintColor} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon size={20} name={'md-contact'} color={tintColor} />
            )
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon size={20} name={'md-information-circle'} color={tintColor} />
            )
        }
    }
},
    {
        tabBarOptions: {
            activeTintColor: '#1a73e8',
            inactiveTintColor: 'black',
            showLabel: true,
            labelStyle: {
                fontSize: 12,
                fontWeight: "bold"
            },
            style: {
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 1,
                elevation: 5,
                borderTopColor: 'lightgray',
                borderTopWidth: 2,
                padding: 5
            }
        },
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                headerTitle: routeName
            }
        },
    }
);
const DashboardStakeNavigator = createStackNavigator({
    DashboardtabNavigator: DashboardtabNavigator
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerLeft: (
                <Icon
                    name="md-menu" size={30}
                    style={{
                        color: "#1a73e8",
                        marginLeft: 20
                    }}
                    onPress={() => navigation.openDrawer()}
                />
            )
        }),
        headerLayoutPreset: 'center'
    }
);

const AccountsStackNavigator = createStackNavigator({
    Accounts: {
        screen: Accounts,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <Icon
                    name="md-menu" size={30}
                    style={{
                        color: "#1a73e8",
                        marginLeft: 20
                    }}
                    onPress={() => navigation.openDrawer()}
                />
            ),
            headerTitle: "Accounts"
        })
    }
}
)

const DashboardDrawerNavigator = createDrawerNavigator({
    Dashboard: DashboardStakeNavigator,
    Accounts: AccountsStackNavigator
})

const AppSwitchNavigator = createSwitchNavigator({
    Welcome: Welcome,
    Dashboard: DashboardDrawerNavigator
})

const AppConatiner = createAppContainer(AppSwitchNavigator)
