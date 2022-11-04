import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable
} from "react-native";

export default function LandingPage(props) {

    return (

        <View style={styles.container}>

            <ImageBackground source={require('../assets/landingpic2.jpeg')} resizeMode="cover" style={styles.image}> 

                <View>
                    <Text style={styles.text1}>Let's make</Text>
                    <Text style={styles.text2}>Your Dream vacation.</Text>
                </View>

                <View style = {styles.StartBtn}>

                    <Pressable onPress={() => props.navigation.navigate("Login")}>
                        <Text style= {styles.StartText}> Get Started </Text>
                    </Pressable>
                </View>
            </ImageBackground>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    image: {
        flex: 1,
        justifyContent: "center",
        opacity: .78,
        backgroundColor: "black",
        
    },

    text1: {
        color: "white",
        fontSize: 35,
        lineHeight: 42,
        fontWeight: "200",
        left: 25,
    },

    text2: {
        color: "white",
        fontSize: 35,
        lineHeight: 42,
        fontWeight: "600",
        left: 25,
    },

    StartBtn: {
        top: 100,
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
        borderColor: "white",
        borderRadius: 23,
        borderWidth: 2,
        paddingVertical: 8,
        width: "30%",
        left: 90,
      },
      
    // need to add font
    StartText: {
        color: "#F8F9FA",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 19.2,
    },
    

  });