import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Explore from "../Explore/Explore.js";
import Saved from "../Saved/Saved.js";
import Checkout from "../Checkout/Checkout.js";
import Profile from '../Profile/Profile.js';

const Tab = createBottomTabNavigator();

export default function Home(props) {
      return (
        <Tab.Navigator
        initialRouteName={"Explore"}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Explore") {
                iconName = 'search';

            } else if (rn === "Saved") {
                iconName = 'heart';

            } else if (rn === "Checkout") {
                iconName = 'cart';

            } else if (rn === "Profile") {
                iconName = 'people';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            "tabBarActiveTintColor": "black",
            "tabBarInactiveTintColor": "grey",
            "tabBarLabelStyle": {
            "paddingBottom": 8,
            "fontSize": 10
            },
            "tabBarStyle": [
            {
                "display": "flex",
                "height": 75,
                "paddingBottom": 10,
                "paddingTop": 15
            },
            null
            ],
            "headerShown": false
        })}>
            <Tab.Screen name={"Explore"} component={Explore} />
            <Tab.Screen name={"Saved"} component={Saved} />
            <Tab.Screen name={"Checkout"} component={Checkout} />
            <Tab.Screen name={"Profile"} component={Profile} />
        </Tab.Navigator>
      );
    }