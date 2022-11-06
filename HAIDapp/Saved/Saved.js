import React from 'react';

import { View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import Listing from '../Explore/Listing';
import { savedlistings } from '../assets/savedlistings';

export default function Explore(props) {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <View>
                    {savedlistings.map((listing, i) => {
                        return <View key={i}><Listing listing={listing} saved={true}/><View style={{height: 6}} /></View>
                    })}
                </View>
            </ScrollView>
        </View>
    );
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