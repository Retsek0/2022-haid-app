import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView , StyleSheet, Text, View, Button, TextInput, Image, Pressable} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

// Vincent

export default function SignUp(props) {
  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="padding"
    >
  
      <Text style={styles.beginning}> CREATE ACCOUNT </Text>
      {/* Full name box */}
      <View style = {styles.inputContainer}>
          <View paddingHorizontal= {10} >
            <Icon name="user" color={"#00716F"} size={25} />
          </View>
          
          <TextInput style = {styles.textInput} placeholder='FULL NAME' />
      </View>
  
      <View style = {styles.inputContainer}>
        <View paddingHorizontal= {10} >
            <Icon name="mail" color={"#00716F"} size={25} />
          </View>
          <TextInput style = {styles.textInput} placeholder='YOUR EMAIL'/>
      </View>

      <View style = {styles.inputContainer}>
        <View paddingHorizontal= {10} >
            <Icon name="lock" color={"#00716F"} size={25} />
          </View>
          <TextInput style = {styles.textInput} placeholder='Password' secureTextEntry />
      </View>

      <View style = {styles.inputContainer}>
        <View paddingHorizontal= {10} >
            <Icon name="lock" color={"#00716F"} size={25} />
          </View>
          <TextInput style = {styles.textInput} placeholder='Confirm Password' secureTextEntry />
      </View>
      
  
      {/* SignUp */}
      <View style = {styles.signBtn}>
  
        <Pressable onPress={() => props.navigation.navigate("DataTracking")}>
          <Text style= {styles.signtext}> Sign Up </Text>
        </Pressable>
  
      </View>
  
      {/* Already have account */}
      <View style = { styles.lastWords}>
        <Text> Already have an account? </Text>
        <Pressable onPress={() => props.navigation.navigate("Login")}>
          <Text
            style={styles.underline}
          > 
            Sign in
          </Text>
        </Pressable>
        
      </View>
  
      <StatusBar style="auto" />
  
    </KeyboardAvoidingView>
  );
  }
  
  const styles = StyleSheet.create({
  
// need to put it at left
  beginning: {
    fontSize: 15,
    marginHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: "#3F6A84"
  },

  container: {
    backgroundColor: "#F8F9FA",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  inputContainer: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    width: "60%",
    height: 60,
    marginTop: 30,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  
  signBtn: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#3F6A84',
    paddingVertical: 8,
    width: "30%",
    borderRadius: 23,
  },
  
  // need to add font
  signtext: {
    color: "#F8F9FA",
  },
  
  // need to be more smooth
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  
  lastWords: {
    flexDirection: 'row',
    marginTop: 50,
  },
  
  underline: {
    textDecorationLine: 'underline',
    color: "#3F6A84"
  }
  
  });
  
  