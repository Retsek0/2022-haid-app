import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from './Cart';
import Payment from './Payment';

const Stack = createNativeStackNavigator();

export default function Checkout(props) {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={"Cart"} component={Cart}/>
            <Stack.Screen name={"Payment"} component={Payment}/>
        </Stack.Navigator>
    );
}