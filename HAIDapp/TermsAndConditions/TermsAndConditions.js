import { Button, View } from 'react-native';

export default function TermsAndConditions(props) {
    return (
        <View style={{position: "absolute", top:"50%", left:"35%"}} /*This style is really dumb please don't use it*/>
            <Button title="Terms And Conditions" onPress={() => props.navigation.navigate("Home")}/>
        </View>
    );
}