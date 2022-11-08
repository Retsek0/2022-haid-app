import { React, useState } from 'react';
import { View, Pressable, Text, StyleSheet} from "react-native";
import { ProgressBar} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function ReasonPreference(props) {
    const [family, setFamily] = useState(false);
    const [romance, setRomance] = useState(false);
    const [business, setBusiness] = useState(false);
    const [adventure, setAdventure] = useState(false);
    
    return (
        <View style={Style.container}>
            <View style={Style.progressBar}>
                <ProgressBar progress={0} color="#3F6A84"/> 
            </View>
            <View style={Style.greetingContainer}>
                <Text style={Style.greeting}> Help us get to know you better!</Text>
                <Text style={Style.greeting}> Select all that apply </Text>
            </View> 

            <View style={Style.titleContainer}>
                <Text style={Style.title}>What would be the reason for your travel?</Text>
            </View>

            <Pressable style={family ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setFamily(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: family ? "black" : "#909090"}]}>Family</Text>
                <MaterialIcons style={Style.icon} name="family-restroom" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={romance ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setRomance(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: romance ? "black" : "#909090"}]} >Romance</Text>
                <FontAwesome5 style={Style.icon}  name="heartbeat" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={business ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setBusiness(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: business ? "black" : "#909090"}]}>Business</Text>
                <FontAwesome5 style={Style.icon}  name="business-time" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={adventure ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setAdventure(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: adventure ? "black" : "#909090"}]}>Adventure</Text>
                <FontAwesome5 style={Style.icon}  name="mountain" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={Style.continueContainer} onPress={() => props.navigation.navigate("CostPreference")}>
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
        marginTop: 5,
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
        marginTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },

    continueText: {
        fontSize: 30,
        color: "white",
        fontWeight: "600"
    }


});