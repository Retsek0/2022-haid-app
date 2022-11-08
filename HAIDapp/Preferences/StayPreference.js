import { React, useState } from 'react';
import { View, Pressable, Text, StyleSheet} from "react-native";
import { ProgressBar} from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function StayPreference(props) {
    const [hostel, setHostel] = useState(false);
    const [hotel, setHotel] = useState(false);
    const [apartment, setApartment] = useState(false);
    
    return (
        <View style={Style.container}>
            <View style={Style.progressBar}>
                <ProgressBar progress={0.50} color="#3F6A84"/> 
            </View>

            <View style={Style.greetingContainer}>
                <Text style={Style.greeting}>Excellent job! You're almost on your long-awaited vacation. </Text>
            </View> 

            <View style={Style.titleContainer}>
                <Text style={Style.title}>Type of stay of your vacation </Text>
            </View>

            <Pressable style={hostel ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setHostel(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: hostel ? "black" : "#909090"}]}>Hostel</Text>
                <Fontisto style={Style.icon} name="room" size={50} color="#00716F"  />
            </Pressable>

            <Pressable style={hotel ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setHotel(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: hotel ? "black" : "#909090"}]} >Hotel/Villa</Text>
                <FontAwesome5 style={Style.icon}  name="hotel" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={apartment ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setApartment(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: apartment ? "black" : "#909090"}]}>Apartment</Text>
                <MaterialIcons style={Style.icon} name="apartment" size={65} color="#00716F"  />
            </Pressable>
            
            <Pressable style={Style.continueContainer} onPress={() => props.navigation.navigate("CarPreference")}>
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
        height: "12%",
        marginTop: 223,
        alignItems: "center",
        justifyContent: "center",
    },

    continueText: {
        fontSize: 30,
        color: "white",
        fontWeight: "600"
    }


});