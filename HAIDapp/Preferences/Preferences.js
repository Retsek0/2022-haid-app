import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CostPreference from "./CostPreference";
import StayPreference from "./StayPreference";
import CarPreference from "./CarPreference";

const Stack = createNativeStackNavigator();

export default function Preferences(props) {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="CostPreference" component={CostPreference}/>
            <Stack.Screen name="StayPreference" component={StayPreference}/>
            <Stack.Screen name="CarPreference" component={CarPreference} initialParams={{ exit: () => props.navigation.navigate("LoadingPage") }}/>
        </Stack.Navigator>
    );
}