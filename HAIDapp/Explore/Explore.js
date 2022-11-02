import React, { useState } from 'react';

import { KeyboardAvoidingView, TextInput, View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import Listing from './Listing';
import { listings } from '../assets/listings';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

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
                        {listings.filter(listing => listing.type == filter).map((listing, i) => {
                            return <Listing key={i} listing={listing}/>
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
                <View style = {styles.inputContainer}>
                    <View paddingHorizontal= {10} >
                        <Entypo name="location-pin" color={"#00716F"} size={25} />
                    </View>
                    <TextInput style = {styles.textInput} placeholder='Departing from' secureTextEntry />
                </View>
                <View style = {styles.inputContainer}>
                    <View paddingHorizontal= {10} >
                        <FontAwesome5 name="globe-europe" color={"#00716F"} size={25} />
                    </View>
                    <TextInput style = {styles.textInput} placeholder='Arriving in' />
                </View>
                <View style = {styles.inputContainer}>
                    <View paddingHorizontal= {10} >
                        <Entypo name="calendar" color={"#00716F"} size={25} />
                    </View>
                    <TextInput style = {styles.textInput} placeholder='Date of departure' secureTextEntry />
                </View>
                <View style = {styles.searchBtn}>
                    <Pressable onPress={() => setSearched(true)}>
                        <Text style= {styles.searchtext}> Search </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
    
const styles = StyleSheet.create({

    inputContainer: {
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 2,
        width: "60%",
        height: 50,
        marginTop: 20,
        marginHorizontal: 40,
        alignItems: 'center',
    },

    textInput: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    searchBtn: {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#3F6A84',
        paddingVertical: 8,
        width: "30%",
        borderRadius: 23,
    },
    
    searchtext: {
        color: "#F8F9FA",
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