import React, { useState } from 'react';
import { View, Text, Pressable, Image} from 'react-native';
import Checkbox from 'expo-checkbox';

export default function DataTracking(props){
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    return(
        <View style={styles.container}>

            <Text style={styles.greeting}>PERSONALISE YOUR EXPERIENCE</Text>
            <Image source={require('../assets/hotels/hotel1.jpg')} style = {styles.image} />

            <View style={[styles.section, {marginRight: "10%"}]}>
                <View style={styles.singleCheckbox}>
                    <Checkbox
                    style={styles.checkbox}
                    value={isChecked1}
                    onValueChange={setChecked1}
                    color={isChecked1 ? '#4630EB' : undefined}
                    />
                    <Text style={styles.paragraph1}>I agree to Your Apps</Text>

                    <Pressable onPress={() => props.navigation.navigate("TermsAndConditions")}>
                        <Text style= {styles.paragraph2}> Terms and Conditions </Text>
                    </Pressable>
                </View>
                
                <View style={styles.singleCheckbox}>
                    <Checkbox
                    style={styles.checkbox}
                    value={isChecked2}
                    onValueChange={setChecked2}
                    color={isChecked2 ? '#4630EB' : undefined}
                    />
                    <Text style={styles.paragraph3}>I allow data tracking across platforms to improve my app experience</Text>
                </View>

            </View>


            <View style = {styles.continueBtn}>
  
                <Pressable onPress={() => props.navigation.navigate("Home")}>
                    <Text style= {styles.continuetext}> Continue </Text>
                </Pressable>

            </View>      

            <View style={styles.finalContainer}>
                <Text style={styles.finalText}>Traveleur promises to never share your data with third parties. It will solely be used for personalising recommendations. You are free to view and delete the data our company has access to on your profile page.</Text>
            </View>      

        </View>
    );
}

const styles = {

    container:{
        flex: 1,
        backgroundColor: '#3F6A84',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    greeting:{
        color: "#FFFFFF",
        fontSize: 44,
        width: "75%"
    },

    image: {
        maxHeight: 300,
        maxWidth: 300,
        marginTop: 5,
        resizeMode: 'contain',
    },

    section: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: "76%",
    },
    singleCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    paragraph1: {
        fontSize: 15,
        color: 'white',
        fontWeight: "300",
    },

    paragraph2: {
        textDecorationLine: 'underline',
        fontSize: 15,
        color: 'white',
        fontWeight: "300",
        alignItems: 'center',
        justifyContent: 'center',
    },

    paragraph3: {
        fontSize: 15,
        color: 'white',
        fontWeight: "300",
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkbox: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 18,
    },

    continueBtn: {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: 'white',
        paddingVertical: 8,
        width: "30%",
        borderRadius: 23,
      },
      
    continuetext: {
        color: "black",
        fontWeight: "700",
    },

    finalContainer: {
        marginTop: 50,
        width: "70%"
    },

    finalText: {
        color: "white",
        lineHeight: 18,
        fontWeight: "300",
    }




    

    

}
