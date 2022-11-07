import { View, Pressable, Text, StyleSheet} from "react-native";
import { ProgressBar} from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function CostPreference(props) {
    return (
        <View style={Style.container}>
            <View style={Style.progressBar}>
                <ProgressBar progress={0.25} color="#3F6A84"/> 
            </View>
            <View style={Style.greetingContainer}>
                <Text style={Style.greeting}> Help us get to know you better!</Text>
                <Text style={Style.greeting}> Select all that apply </Text>
            </View> 

            <View style={Style.titleContainer}>
                <Text style={Style.title}>Select your cost preference while travelling </Text>
            </View>

            <Pressable style={Style.fillIn} onPress={() => props.navigation.navigate("StayPreference")}>
                <Text style={Style.fillInText}>Budget-friendly</Text>
                <MaterialIcons style={Style.icon} name="money-off" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={Style.fillIn} onPress={() => props.navigation.navigate("StayPreference")}>
                <Text style={Style.fillInText} > No Preference </Text>
                <FontAwesome5 style={Style.icon}  name="money-bill-wave" size={50} color="#00716F" />
            </Pressable>

            <Pressable style={Style.fillIn} onPress={() => props.navigation.navigate("StayPreference")}>
                <Text style={Style.fillInText}>Luxury               </Text>
                <Fontisto style={Style.icon} name="holiday-village" size={45} color="#00716F" />
            </Pressable>

            
            <Pressable style={Style.continueContainer} onPress={() => props.navigation.navigate("StayPreference")}>
                <Text style={Style.continueText}>CONTINUE</Text>
            </Pressable>
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
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
        marginTop: 30,
    },  

    title: {
        fontSize: 38,
        fontWeight: "700",
        lineHeight: 50,
        color: "#3F6A84"
    },

    fillIn: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        width: "75%",
        height: "auto",
        backgroundColor: "white",
        marginTop: 30,
        borderColor: "#A5A5A5",
        borderRadius: 10,
        borderWidth: 3,
    },

    fillInText: {
        fontSize: 25,
        marginVertical: 30,
        marginRight: "10%",
        color: "#909090",
        fontWeight: "600",
    },

    icon: {
       marginVertical: 17,
       justifyContent: "flex-end",
    },

    continueContainer: {
        backgroundColor: "#3F6A84",
        width: "100%",
        height: "13%",
        marginTop: "22%",
        alignItems: "center",
        justifyContent: "center",
    },

    continueText: {
        fontSize: 30,
        color: "white",
        fontWeight: "600"
    }


});