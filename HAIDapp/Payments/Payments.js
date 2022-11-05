import * as React from 'react';
import {KeyboardAvoidingView, View, Text, ScrollView, TouchableOpacity, Alert, Pressable, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Payments({ props }) {
    return (
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}> Payment Details </Text>
            </View>

            <View style={styles.paymentContainer}>
                <View style={styles.singlePayment}>
                    <TextInput style = {styles.textInput} placeholder='Card number' />
                </View>
                <View style={styles.singlePayment}>
                    <TextInput style = {styles.textInput} placeholder='Expire Date (mm/yy)' />
                </View>
                <View style={styles.singlePayment}>
                    <TextInput style = {styles.textInput} placeholder='CVV' secureTextEntry />
                </View>
                <View style={styles.singlePayment}>
                    <TextInput style = {styles.textInput} placeholder='Card holder name' />
                </View>
            </View>

            <View style={styles.checkContainer}>

                <Text style={styles.checkText}> Total Price: $100.20 (Saved $40)</Text>
                <View style = {styles.checkBtn}>
                    {/* To booking confirm page */}
                    <Pressable onPress={() => props.navigation.navigate("Payments")}>
                        <Text style= {styles.btnText}> Pay </Text>
                    </Pressable>

                </View>
            </View>
            {/* Next will be the footer */}
        </KeyboardAvoidingView>
    );
}

const styles = {
    container: {
        backgroundColor: "#F8F9FA",
    },

    header: {
        backgroundColor: '#F8F9FA',
        paddingHorizontal: 60,
        alignItems: 'center',
        justifyContent: 'center',
        height: "20%",
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    headerText: {
        fontSize: 36,
        fontWeight: "700",
        lineHeight: 36,
        marginTop: 100
    },

    paymentContainer: {
        height: "55%",
        width: "100%",
        backgroundColor: "#F8F9FA",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    singlePayment: {

        flexDirection: "row",
        borderRadius: 20,
        borderWidth: 2,
        width: "70%",
        height: 50,
        marginTop: 50,
        marginHorizontal: 60,
        alignItems: 'center',
        paddingHorizontal: 20,
        borderColor: "#3F6A84",
    },

    checkContainer: {
        height: "20%",
        backgroundColor: "#F8F9FA",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkText: {
        fontSize: 20,
        fontWeight: "700",
    },

    checkBtn: {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#F1F3F4',
        paddingVertical: 8,
        width: "40%",
        borderRadius: 13,
        borderWidth: 2,
      },
      
      // need to add font
    btnText: {
        color: "black",
        fontSize: 20,
        fontWeight: "700",
    },
}
