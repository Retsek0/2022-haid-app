import React from 'react';
import { View } from 'react-native';

export default function Home(props) {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <View style={{height: 50, backgroundColor: 'powderblue'}} /*This will be a status bar with a greeting and a button to access your profile/settings*/ /> 
            <View style={{flex:1, backgroundColor: 'skyblue'}} /*This will be a NavigationContainer containing the explore, saved and bookings which are scrollable views*/ />
            <View style={{height: 50, backgroundColor: 'steelblue'}} /*This will be the activity menu, a row of buttons allowing the user to switch between explore, saved and bookings*/ />
        </View>
    );
}