import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Pressable } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default function ConfirmPayments({ navigation }) {
    return (
        <View style={styles.container}>
            <Icon name="checkcircle" color={"#3F6A84"} size={145} />
            <Text style={styles.confirmedTxt}> Booking Confirmed </Text>
            <Text style={styles.idTxt}> ID: 12345 </Text>
            <Text style={styles.infTxt}> Your booking is now available under the bookings section. Please check your email for your booking confirmation. </Text>
            <View style = {styles.Btn}>

                <Pressable onPress={() => props.navigation.navigate("Home")}>
                    <Text style= {styles.btntext}> Back Home </Text>
                </Pressable>

            </View>
        </View>
    );
}

const styles = {

    container: {
        backgroundColor: "whitesmoke",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    confirmedTxt: {
        marginTop: 30,
        fontSize: 34,
        fontWeight: "700"
    },

    idTxt: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: "300"
    },

    infTxt: {
        marginTop: 30,
        fontSize: 15,
        fontWeight: "500",
        width: "75%",
        alignItems: 'center',
        justifyContent: 'center'
    },

    Btn: {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: '#3F6A84',
        paddingVertical: 12,
        width: "40%",
        borderRadius: 23,
      },
      
      // need to add font
    btntext: {
        color: "#F8F9FA",
        fontSize: 16,
        fontWeight: "700"
    },

}