import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView , StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';

// Vincent

export default function Login(props) {
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
    <View style = {styles.inputContainer}  >
        <TextInput style = {styles.textInput} placeholder='Your Email' />
        <TextInput style = {styles.textInput} placeholder='Your Password' secureTextEntry />
    </View>

    {/* Login */}
    <View style = { styles.loginBtn }>
      <Button title='LOGIN' style={styles.btn} onPress={() => props.navigation.navigate("Home")}/>
    </View>

    {/* Dont have account */}
    <View style = { styles.lastWords}>
      <Text> Don't have an account? </Text>
      {/* this later will be functioned as a button.  */}
      <Text
        style={styles.underline}
        onPress={() => props.navigation.navigate("SignUp")}
      > 
        Sign Up 
      </Text>
    </View>

    <StatusBar style="auto" />

  </KeyboardAvoidingView>
);
}

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
  borderRadius: 30,
  width: "60%",
  height: 60,
  marginBottom: 5,
  alignItems: "center",
  justifyContent: 'center',
},

textInput: {
  paddingHorizontal: 15,
  paddingVertical: 10,
},

loginBtn: {
  backgroundColor: "#3F6A84" ,
  width: "30%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 25,
},

btn: {
  fontSize: 20,
  color: "#F8F9FA",
},

lastWords: {
  flexDirection: 'row',
  marginTop: 40,
},

underline: {
  textDecorationLine: 'underline'
}

});

