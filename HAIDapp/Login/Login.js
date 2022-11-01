import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView , StyleSheet, Text, View, Button, TextInput, Image, Pressable} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

import {
  Lato_700Bold,
} from '@expo-google-fonts/lato';

import {
  useFonts,
  JosefinSans_400Regular_Italic,
} from '@expo-google-fonts/josefin-sans';

// Vincent
// Finished

export default function Login(props) {
  let [fontsLoaded] = useFonts({
    Lato_700Bold,
    JosefinSans_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
  <KeyboardAvoidingView 
  style={styles.container}
  behavior="padding"
  >

    {/* Background picture */}
    <View>
      <Image source={require('../assets/TraveleurLogo.png')} />
    </View>

    {/* Login box */}
    <View style = {styles.inputContainer}>
        <View paddingHorizontal= {10} >
          <Icon name="mail" color={"#00716F"} size={25} />
        </View>
        
        <TextInput style = {styles.textInput} placeholder='Your Email' />
    </View>

    <View style = {styles.inputContainer}>
      <View paddingHorizontal= {10} >
          <Icon name="lock" color={"#00716F"} size={25} />
        </View>
        <TextInput style = {styles.textInput} placeholder='Your Password' secureTextEntry />
    </View>
   

    {/* Login */}
    <View style = {styles.loginBtn}>

      <Pressable onPress={() => props.navigation.navigate("Home")}>
        <Text style= {styles.logintext}> Login </Text>
      </Pressable>

    </View>

    {/* Dont have account */}
    <View style = { styles.lastWords}>
      <Text> Don't have an account? </Text>
      <Pressable onPress={() => props.navigation.navigate("SignUp")}>
        <Text
          style={styles.underline}
        > 
          Sign Up
        </Text>
      </Pressable>
      
    </View>

    <StatusBar style="auto" />

  </KeyboardAvoidingView>
);
}}

const styles = StyleSheet.create({

container: {
  backgroundColor: "#F8F9FA",
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},

Image: {
  maxHeight: 200,
  marginTop: 20,
},

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

loginBtn: {
  marginHorizontal: 55,
  alignItems: "center",
  justifyContent: 'center',
  marginTop: 20,
  backgroundColor: '#3F6A84',
  paddingVertical: 8,
  width: 111,
  height: 'auto',
  borderRadius: 20,
},

logintext: {
  color: "#F8F9FA",
  fontFamily: 'Lato_700Bold',
  fontSize: 17,
  fontWeight: 800,
},

textInput: {
  paddingHorizontal: 15,
  paddingVertical: 10,
},

lastWords: {
  flexDirection: 'row',
  marginTop: 40,
  height: 'auto'
},

underline: {
  fontFamily: 'JosefinSans_400Regular_Italic',
  color: "#3F6A84",
  fontSize: 17
}

});

