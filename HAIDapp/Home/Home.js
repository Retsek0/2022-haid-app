import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Explore from "../Explore/Explore.js";
import Saved from "../Saved/Saved.js";
import Bookings from "../Bookings/Bookings.js";
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
                iconName = focused ? 'search' : 'search';

            } else if (rn === "Saved") {
                iconName = focused ? 'heart' : 'heart';

            } else if (rn === "Bookings") {
                iconName = focused ? 'clipboard' : 'clipboard';

            } else if (rn === "Profile") {
                iconName = focused ? 'people' : 'people';
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
            <Tab.Screen name={"Bookings"} component={Bookings} />
            <Tab.Screen name={"Profile"} component={Profile} />
        </Tab.Navigator>
      );
    }