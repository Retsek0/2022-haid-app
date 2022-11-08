import { React, useState } from 'react';
import { View, Pressable, Text, StyleSheet} from "react-native";
import { ProgressBar} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function CarPreference(props) {
    const [manual, setManual] = useState(false);
    const [automatic, setAutomatic] = useState(false);
    const [electric, setElectric] = useState(false);
    const [none, setNone] = useState(false);
    
    return (
        <View style={Style.container}>
            <View style={Style.progressBar}>
                <ProgressBar progress={0.75} color="#3F6A84"/> 
            </View>
            <View style={Style.greetingContainer}>
                <Text style={Style.greeting}>Superb! What type of cars would you be interested in renting </Text>
            </View> 

            <View style={Style.titleContainer}>
                <Text style={Style.title}>Type of car you'd like to hire for your vacation </Text>
            </View>

            <Pressable style={manual ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setManual(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: manual ? "black" : "#909090"}]}>Manual           </Text>
                <Ionicons style={Style.icon} name="md-car-sport" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={automatic ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setAutomatic(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: automatic ? "black" : "#909090"}]} >Automatic    </Text>
                <FontAwesome5 style={Style.icon}  name="car" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={electric ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setElectric(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: electric ? "black" : "#909090"}]}>Electric          </Text>
                <MaterialIcons style={Style.icon} name="electric-car" size={65} color="#00716F"  />
            </Pressable>

            <Pressable style={none ? Style.fillInSelected : Style.fillInUnselected} onPress={() => setNone(prevState => !prevState)}>
                <Text style={[Style.fillInText, {color: none ? "black" : "#909090"}]}>No car       </Text>
                <FontAwesome style={Style.icon} name="drivers-license" size={50} color="#00716F" />
            </Pressable>
            
            <Pressable style={Style.continueContainer} onPress={() => props.route.params.exit()}>
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
        height: "9%",
        marginTop: 57,
        alignItems: "center",
        justifyContent: "center",
    },

    continueText: {
        fontSize: 30,
        color: "white",
        fontWeight: "600"
    }


});