import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Pressable } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.greetingContainer}>
                <Entypo name="user" color={"blue"} size={80}/>
                <View style={styles.greeting}>
                    <Text style={styles.myname}> Kieran Arul </Text>

                    <View style = {styles.Btn}>

                        <Pressable onPress={ function () {
                            Alert.alert("View the data")
                        }}>
                            <Text style= {styles.btntext}> View data </Text>
                        </Pressable>

                    </View>

                    <View style = {styles.Btn}>

                    <Pressable onPress={ function () {
                        Alert.alert("Your data has been removed.")
                    }}>
                        <Text style= {styles.btntext}> Delete data </Text>
                    </Pressable>

                    </View>

                </View>

            </View>

            <View style={styles.profileContainer}>
                <Icon name="user" color={"blue"} size={45} />
                <View>
                    <Text style={styles.title}> Name </Text>
                    <Text style={styles.content}> Kieran Arul </Text>
                </View> 
            </View>

            <View style={styles.profileContainer}>
                <Icon name="mail" color={"blue"} size={45} />
                <View>
                    <Text style={styles.title}> Email </Text>
                    <Text style={styles.content}> Kieran@gmail.com </Text>
                </View> 
            </View>

            <View style={styles.profileContainer}>
                <Icon name="calendar" color={"blue"} size={45} />
                <View>
                    <Text style={styles.title}> Date of Birth </Text>
                    <Text style={styles.content}> 24/12/1998 </Text>
                </View> 
            </View>

            <View style={styles.profileContainer}>
                <Entypo name="users" color={"blue"} size={45} />
                <View>
                    <Text style={styles.title}> Family Size </Text>
                    <Text style={styles.content}> 4 (2 adults, 2 kids) </Text>
                </View> 
            </View>

            <View style={styles.profileContainer}>
                <Icon name="home" color={"blue"} size={45} />
                <View>
                    <Text style={styles.title}> Address </Text>
                    <Text style={styles.content}> 23 Kensington Palace Gardens </Text>
                </View> 
            </View>

            <View style={styles.profileContainer}>
                <Icon name="earth" color={"blue"} size={45} />
                <View>
                    <Text style={styles.title}> Country of Birth </Text>
                    <Text style={styles.content}> Singapore </Text>
                </View> 
            </View>

            <View style={styles.profileContainer}>
                <Icon name="phone" color={"blue"} size={45} />
                <View>
                    <Text style={styles.title}> Phone number </Text>
                    <Text style={styles.content}> 07746695520 </Text>
                </View> 
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

    greetingContainer: { 
        paddingHorizontal: 70,
        paddingVertical: 40,
        backgroundColor: "white",
        height: 170,
        width: "100%",
        flexDirection: 'row',
    },

    greeting: {
        paddingHorizontal: 40,
    },

    myname: {
        fontSize: 26,
        fontWeight: "600",
        color: '#00716F',
    },

    Btn: {
        width: "140%",
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 16,
        height: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    btntext: {

        fontSize: 16,
        fontWeight: "500"

    },

    profileContainer: {
        paddingHorizontal: 50,
        paddingVertical: 10,
        flexDirection: "row",
        marginVertical: 0,
        backgroundColor: 'white',
        height: 70,
        width: '85%',
        marginTop: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    title: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: "700",
    },

    content : {
        marginTop: 2,
        paddingHorizontal: 30,

    },



}