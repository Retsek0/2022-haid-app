import React from 'react';

import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ActivityMenu from "./ActivityMenu.js";
import Explore from "../Explore/Explore.js";
import Saved from "../Saved/Saved.js";
import Bookings from "../Bookings/Bookings.js";

const Activity = createNativeStackNavigator();
const navigationRef = React.createRef();

export default function Home(props) {
    
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <View style={{height: 50, backgroundColor: 'powderblue'}} /*This will be a status bar with a greeting and a button to access your profile/settings*/ /> 
            <NavigationContainer independent={true} ref={navigationRef} >
                <Activity.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
                    <Activity.Screen name="Explore" component={Explore}/>
                    <Activity.Screen name="Saved" component={Saved}/>
                    <Activity.Screen name="Bookings" component={Bookings}/>
                </Activity.Navigator>
            </NavigationContainer>
            <ActivityMenu navigationRef={navigationRef}/>
        </View>
    );
}