import { Button, View } from 'react-native';

export default function LandingPage(props) {
    return (
        <View style={{position: "absolute", top:"50%", left:"35%"}} /*This style is really dumb please don't use it*/>
            <Button title="Landing Page" onPress={() => props.navigation.navigate("Login")}/>
        </View>
    );
}