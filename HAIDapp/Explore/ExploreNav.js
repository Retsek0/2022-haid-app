import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AirlineFiltering from '../Filtering/AirlineFiltering';
import CarFiltering from '../Filtering/CarFiltering';
import Explore from "./Explore";

const Stack = createNativeStackNavigator();

export default function Checkout(props) {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={"Explore"} component={Explore}/>
            <Stack.Screen name={"AirlineFiltering"} component={AirlineFiltering}/>
            <Stack.Screen name={"CarFiltering"} component={CarFiltering} />
        </Stack.Navigator>
    );
}