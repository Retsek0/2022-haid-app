import { useState } from "react";
import { View, Text } from 'react-native';

import ActivityMenu from "./ActivityMenu.js";

export default function Home(props) {
    
    const [activity, setActivity] = useState(); /* This will be used to handle which activity to display, will need modification */
    
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <View style={{height: 50, backgroundColor: 'powderblue'}} /*This will be a status bar with a greeting and a button to access your profile/settings*/ /> 
            <View style={{flex:1, backgroundColor: 'skyblue', alignItems: "center", justifyContent: 'center',}} /*This will be a NavigationContainer containing the explore, saved and bookings which are scrollable views*/ >
                <Text>{activity}</Text>
            </View>
            <ActivityMenu onPress={setActivity} />
        </View>
    );
}