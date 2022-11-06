import React, { useState } from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import Checkbox from 'expo-checkbox';

export default function HotelFiltering(props) {

    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);

    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);
    const [isChecked7, setChecked7] = useState(false);

    const [isChecked8, setChecked8] = useState(false);
    const [isChecked9, setChecked9] = useState(false);
    const [isChecked10, setChecked10] = useState(false);

    const [isChecked11, setChecked11] = useState(false);
    const [isChecked12, setChecked12] = useState(false);
    const [isChecked13, setChecked13] = useState(false);

    return(

        <View style={styles.container}>

                <View style={styles.header}>
                    <Icon name="user" color={"#00716F"} size={60} />
                    <Text style = {styles.greetingText}> Hi, Kieran </Text>
                </View>

                <View style={styles.mainFiltering}>
                    <Text style={styles.title}> Hotel Filiting </Text>

                    <View style={styles.eachFilter}>
                        <Text style={styles.name}> Price: </Text>

                        <View style={styles.checkBox}>
                            
                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked1}
                            onValueChange={setChecked1}
                            color={isChecked1 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>Ascending</Text>

                        </View>

                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked2}
                            onValueChange={setChecked2}
                            color={isChecked2 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>Descending</Text>
                        </View>

                    </View>

                    <View style={styles.eachFilter}>
                        <Text style={styles.name}> User rating: </Text>
                        <View style={styles.rating}>

                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked3}
                            onValueChange={setChecked3}
                            color={isChecked3 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>5</Text>

                        </View>
            

                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked4}
                            onValueChange={setChecked4}
                            color={isChecked4 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>4</Text>

                        </View>

                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked5}
                            onValueChange={setChecked5}
                            color={isChecked5 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>3</Text>

                        </View>

                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked6}
                            onValueChange={setChecked6}
                            color={isChecked6 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>2</Text>

                        </View>

                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked7}
                            onValueChange={setChecked7}
                            color={isChecked7 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>1</Text>

                        </View>

                        </View>
                    </View>

                    <View style={styles.eachFilter}>
                        <Text style={styles.name}> Amenities: </Text>
                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked7}
                            onValueChange={setChecked7}
                            color={isChecked7 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>Free WIFI</Text>

                        </View>
                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked7}
                            onValueChange={setChecked7}
                            color={isChecked7 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>Washing & Dry service</Text>

                        </View>
                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked7}
                            onValueChange={setChecked7}
                            color={isChecked7 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>A/C</Text>

                        </View>
                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked7}
                            onValueChange={setChecked7}
                            color={isChecked7 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>Free breakfast</Text>

                        </View>
                        <View style={styles.checkBox}>

                            <Checkbox
                            style={styles.checkbox}
                            value={isChecked7}
                            onValueChange={setChecked7}
                            color={isChecked7 ? '#4630EB' : undefined}
                            />
                            <Text style={styles.paragraph}>Free Parking</Text>

                        </View>

                    </View>
                </View>

                <View style={styles.btnContainer}>

                    <View style = {styles.eachBtn}>

                        <Pressable onPress={() => props.navigation.navigate("Home")}>
                            <Text style= {styles.applytext}> Apply </Text>
                        </Pressable>
                    </View>

                    <View style = {styles.eachBtn}>
                        <Pressable onPress={() => alert('Data has been cleared')}>
                            <Text style= {styles.applytext}> Cancel </Text>
                        </Pressable>
                    </View>
                </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "whitesmoke",
    },

    header: {
        flexDirection: "row",
        paddingHorizontal: "20%",
        paddingVertical: "10%",
        justifyContent: 'center',
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },

    greetingText: {
        fontSize: 20,
        paddingHorizontal: 10,
        width: "100%",
        lineHeight: 20,
        fontWeight: "700",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        color: "#3F6A84",
    },

    mainFiltering: {
        justifyContent: 'center',
        alignItems: "center",
    },  

    title: {
        fontSize: 30,
        fontWeight: "700",
        marginTop: 50,
    },

    eachFilter: {
        marginTop: 25,
        width: "75%",
        height: "auto",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },


    name: {
        fontSize: 25,
        fontWeight: "700",
    },

    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: "4%",
        paddingHorizontal: "2%",
    },

    paragraph: {
        fontSize: 15,
        paddingHorizontal: "3%",
    },
    rating: {
        flexDirection: "row",
    },
    checkbox: {
        margin: 1,
    },
    checkboxRow: {
        marginLeft: "30%",
    },

    btnContainer: {
        flexDirection: "row",
        marginTop: 50,
    },

    eachBtn: {
        marginHorizontal: 45,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#3F6A84',
        paddingVertical: 8,
        width: "30%",
        borderRadius: 23,
    },
    
    applytext: {
        color: "#F8F9FA",
    },
});