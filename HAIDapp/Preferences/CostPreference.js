import { View, Pressable, Text, StyleSheet } from "react-native";
import { ProgressBar} from 'react-native-paper';

export default function CostPreference(props) {
    return (
        <View style={Style.container}>

            <ProgressBar style={Style.progressBar}progress={0.25} color="#3F6A84" /> 
            <View style={Style.greetingContainer}>
                <Text style={Style.greeting}> Help us get to know you better!</Text>
                <Text style={Style.greeting}> Select all that apply </Text>
            </View> 

            <View style={Style.titleContainer}>
                <Text style={Style.title}>Select your cost preference while travelling </Text>
            </View>
            
            <Pressable onPress={() => props.navigation.navigate("StayPreference")}>
                <Text>Next</Text>
            </Pressable>
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        color: "whitesmoke"
    },

    progressBar: {
        height: "13%",
        width: "50%",
        marginVertical: 25
    },

    greetingContainer: {
        width: "60%",
        alignItems: "center",
    },  

    greeting: {
        fontSize: 15,
        lineHeight: 20,
        color: "#3F6A84",
        fontWeight: "600"
    },  

    titleContainer: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },  

    title: {
        fontSize: 42,
        fontWeight: "700",
        lineHeight: 50,
        color: "#3F6A84"
    }



});