import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home/Home.js";
import Login from "./Login/Login.js";
import SignUp from './SignUp/SignUp.js';
import LandingPage from "./LandingPage/LandingPage.js";
import TermsAndConditions from "./TermsAndConditions/TermsAndConditions.js";
import DataTracking from "./DataTracking/DataTracking";
import Preferences from "./Preferences/Preferences";
import LoadingPage from "./LoadingPage/LoadingPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="DataTracking" component={DataTracking}/>
        <Stack.Screen name="Preferences" component={Preferences}/>
        <Stack.Screen name="LoadingPage" component={LoadingPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}