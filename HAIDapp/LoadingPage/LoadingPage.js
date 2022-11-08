import { View, Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function CarPreference(props) {
    return (
        <View style={Style.container}>
            <View style={Style.greetingContainer}>
                <MaterialCommunityIcons style={Style.icon} name="robot-love-outline" size={130} color="whitesmoke" />
                <Text style={Style.greetingText}>Thanks for your very honest response! 
                We are finding the best travel plan for you!</Text>
            </View>
            <ActivityIndicator size="large" color="whitesmoke" marginTop={"12%"}/>
            <View style={Style.tipsContainer}>
                <Text style={Style.tipsTxt}>“The journey of a thousand miles begins with a single step.”</Text>
            </View>

            <Pressable  style={Style.btn} onPress={() => props.navigation.navigate("Home")}>
                <Text style={Style.btnText}>Start</Text>
            </Pressable>
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#3F6A84',
    },

    greetingContainer: {
        width: "80%",
    },

    icon: {
        marginHorizontal: "30%"
    },  

    greetingText: {
        fontSize: 29,
        fontWeight: "700",
        marginTop: 30,
        color: "black"
    },

    tipsContainer: {
        width: "80%",
        justifyContent: "center",
        alignContent: "center"
    },

    tipsTxt: {
        lineHeight: 25,
        marginTop: 20,
        color: "whitesmoke",
    },

    recomContainer: {
        width: "70%",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "20%"
    },

    recomTxt: {
        lineHeight: 30,
        marginTop: 10,
        color: "whitesmoke",
        fontSize: 26
    },

    btn: {
        width: "35%",
        backgroundColor: "whitesmoke",
        height: "auto",
        alignItems: "center",
        marginTop: 80,
        borderColor: "black",
        borderRadius: 13,
        borderWidth: 2,
    },

    btnText: {
        fontSize: 36,
        fontWeight: "500",
        color: "#3F6A84"
    }
});