import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import ExploreScreen from './screens/ExploreScreen';
import SavedScreen from './screens/SavedScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookingsScreen from './screens/BookingsScreen';

//Screen names
const Explore = "Explore";
const Saved = "Saved";
const Bookings = "Bookings";
const Profile = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Explore}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === Explore) {
              iconName = focused ? 'search' : 'search';

            } else if (rn === Saved) {
              iconName = focused ? 'heart' : 'heart';

            } else if (rn === Bookings) {
              iconName = focused ? 'clipboard' : 'clipboard';

            } else if (rn === Profile) {
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
              "display": "flex"
            },
            null
          ]
        })}>

        <Tab.Screen name={Explore} component={ExploreScreen} />
        <Tab.Screen name={Saved} component={SavedScreen} />
        <Tab.Screen name={Bookings} component={BookingsScreen} />
        <Tab.Screen name={Profile} component={ProfileScreen} />
       

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;