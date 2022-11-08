import { React, useState } from 'react';
import { View, Pressable, Text, StyleSheet} from "react-native";
import { ProgressBar} from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function CostPreference(props) {
    const [luxury, setLuxury] = useState(false);
    const [budget, setBudget] = useState(false);
    const [none, setNone] = useState(false);
    
    return (
        <View style={Style.container}>
            <View style={Style.progressBar}>
                <ProgressBar progress={0.25} color="#3F6A84"/> 
            </View>
            <View style={Style.greetingContainer}>
                <Text style={Style.greeting}>Good Job! Do you know travel can cost less than you think?</Text>
            </View> 

            <View style={Style.titleContainer}>
                <Text style={Style.title}>Select your cost preference while travelling </Text>
            </View>

            <Pressable style={luxury ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setLuxury(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: luxury ? "black" : "#909090"}]}>Luxury</Text>
                <Fontisto style={Style.icon} name="holiday-village" size={45} color="#00716F" />
            </Pressable>

            <Pressable style={budget ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setBudget(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: budget ? "black" : "#909090"}]}>Budget-friendly</Text>
                <MaterialIcons style={Style.icon} name="money-off" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={none ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setNone(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: none ? "black" : "#909090"}]} > No Preference </Text>
                <FontAwesome5 style={Style.icon}  name="money-bill-wave" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={Style.continueContainer} onPress={() => props.navigation.navigate("StayPreference")}>
                <Text style={Style.continueText}>CONTINUE</Text>
            </Pressable>
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        color: "whitesmoke"
    },

    progressBar: {
        marginTop: "12%",
        height: "auto",
        width: "80%",
    },

    greetingContainer: {
        marginTop: 20,
        width: "60%",
        alignItems: "center",
    },  

    greeting: {
        fontSize: 15,
        lineHeight: 20,
        color: "#3F6A84",
        fontWeight: "600",
    },  

    titleContainer: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },  

    title: {
        fontSize: 38,
        fontWeight: "700",
        lineHeight: 50,
        color: "#3F6A84"
    },

    fillInUnselected: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        width: "75%",
        height: "auto",
        backgroundColor: "white",
        marginTop: 15,
        borderColor: "#A5A5A5",
        borderRadius: 10,
        borderWidth: 3,
    },

    fillInSelected: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        width: "75%",
        height: "auto",
        backgroundColor: "#6792ac",
        marginTop: 15,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 3,
    },

    fillInText: {
        fontSize: 25,
        marginVertical: 30,
        marginRight: "10%",
        fontWeight: "600",
    },

    icon: {
       marginVertical: 17,
       justifyContent: "flex-end",
    },

    continueContainer: {
        flex: 1,
        backgroundColor: "#3F6A84",
        width: "100%",
        height: "10%",
        marginTop: 180,
        alignItems: "center",
        justifyContent: "center",
    },

    continueText: {
        fontSize: 30,
        color: "white",
        fontWeight: "600"
    }


});