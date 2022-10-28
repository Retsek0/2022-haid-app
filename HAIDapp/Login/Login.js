import { Button, StyleSheet, Text, View } from 'react-native';

export default function Login(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login</Text>
            <Button 
                title="Create an account"
                onPress={() => props.navigation.navigate("signup")}
            />
            <Button 
                title="Login"
                onPress={() => props.navigation.navigate("home")}
            />
        </View>
    );
  }