import React, { useState } from 'react';

import { KeyboardAvoidingView, TextInput, View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import Listing from './Listing';
import { listings } from '../assets/listings';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from '@expo/vector-icons/AntDesign';

export default function Explore(props) {
    const [filter, setFilter] = useState("airline");
    const [searched, setSearched] = useState(false);

    if (searched) {
        return (
            <View style={styles.container}>
                <View style={{ height: 50 }}/>
                <View style={styles.filter}>
                    <Pressable 
                        style={styles.filterOption}
                        onPress={() => setFilter("airline")}
                    >
                        <FontAwesome5 name={"plane"} size={40} color={filter == "airline" ? "black" : "grey"} style={{paddingTop:6}}/>
                        <Text style={{paddingTop:6}}>Flights</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.filterOption}
                        onPress={() => setFilter("hotel")}
                    >
                        <MaterialIcons name={"hotel"} size={54} color={filter == "hotel" ? "black" : "grey"}/>
                        <Text>Hotels</Text>
                    </Pressable>
                    <Pressable 
                        style={styles.filterOption}
                        onPress={() => setFilter("car")}
                    >
                        <FontAwesome5 name={"car-side"} size={42} color={filter == "car" ? "black" : "grey"} style={{paddingTop:6}}/>
                        <Text style={{paddingTop:6}}>Car Hire</Text>
                    </Pressable>
                </View>
                <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                    <View>
                        <View style={{height: 12}} />
                        {listings.filter(listing => listing.type == filter).map((listing, i) => {
                            return <View key={i}><Listing listing={listing} saved={false}/><View style={{height: 6}} /></View>
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    } else {
        return (

            <KeyboardAvoidingView 
                style={styles.container}
                behavior="padding"
            >

                <View style={styles.header}>
                    <Icon name="user" color={"#00716F"} size={60} />
                    <Text style = {styles.greetingText0}> Hi, Kieran </Text>
                </View>

                <View>
                    <Text style = {styles.greetingText1}> Where would you</Text>
                    <Text style = {styles.greetingText2}> like to go?</Text>
                </View>
                
                <View style = {styles.inputContainer}>
                    <View paddingHorizontal= {10} >
                        <Entypo name="location-pin" color={"#00716F"} size={30} />
                    </View>
                    <TextInput style = {styles.textInput1} placeholder='City of Origin' />
                    <View style={styles.line}></View>
                    <TextInput style = {styles.textInput1} placeholder='City of Arrival' />
                </View>
                <View style = {styles.inputContainer}>
                    <View paddingHorizontal= {13} >
                        <Entypo name="calendar" color={"#00716F"} size={28} />
                    </View>
                    <TextInput style = {styles.textInput2} placeholder='Date of Depature' />
                    <View style={styles.line}></View>
                    <TextInput style = {styles.textInput2b} placeholder='Date of Arrival' />
                </View>
                <View style = {styles.inputContainer}>
                    <View paddingHorizontal= {10} >
                        <Icon name="user" color={"#00716F"} size={30} />
                    </View>
                    <TextInput style = {styles.textInput3} placeholder='Number of People' />
                </View>
                <View style = {styles.searchBtn}>
                    <Pressable onPress={() => setSearched(true)}>
                        <Text style= {styles.searchtext}> SEARCH </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
    
const styles = StyleSheet.create({
    
    header: {
        flexDirection: "row",
        paddingHorizontal: 30,
        paddingVertical: 5,
        marginBottom: 20,
    },

    greetingText0: {
        fontSize: 20,
        paddingHorizontal: 7,
        width: "100%",
        lineHeight: 20,
        fontWeight: "700",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        color: "#3F6A84",
    },

    greetingText1: {
        paddingHorizontal: 30,
        fontSize: 42,
        width: "100%",
        lineHeight: 42,
        fontWeight: "600",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    greetingText2: {
        paddingHorizontal: 34,
        fontSize: 42,
        width: "100%",
        lineHeight: 42,
        fontWeight: "600",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
    },

    inputContainer: {
        borderColor: "#3F6A84",
        flexDirection: "row",
        borderRadius: 30,
        borderWidth: 2,
        width: "80%",
        height: 60,
        marginTop: 40,
        marginHorizontal: 40,
        alignItems: 'center',
    },

    line: {
        height: '100%',
        width: 0.5,
        backgroundColor: 'grey',
        opacity: 0.5,
        borderRadius: 1,
        justifyContent: 'center'
    },

    textInput1: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 15,
        fontWeight: "500",
        color: "black"
    },

    textInput2: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        fontSize: 15,
        fontWeight: "500",
        color: "black"
    },

    textInput2b: {
        paddingHorizontal: 19,
        paddingVertical: 10,
        fontSize: 15,
        fontWeight: "500",
        color: "black"
    },

    textInput3: {
        paddingHorizontal: 60,
        paddingVertical: 12,
        fontSize: 15,
        fontWeight: "500",
        color: "black"
    },

    searchBtn: {
        marginHorizontal: 155,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 35,
        backgroundColor: '#3F6A84',
        paddingVertical: 10,
        width: "30%",
        borderRadius: 10,
    },
    
    searchtext: {
        color: "#F8F9FA",
        fontWeight: "700"
    },

    filter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 100,
    },

    filterOption: {
        paddingLeft: 25,
        paddingRight: 25,
        alignItems: "center"
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1'
    },

    listing: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#3F6A84',
        paddingVertical: 8,
        width: "30%",
        borderRadius: 23,
    },
});