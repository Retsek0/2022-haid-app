import { StyleSheet, Button, Text, View } from 'react-native';

export default function SignUp(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign Up</Text>
        <Button
            title="Already have an account?"
            onPress={() => props.navigation.navigate("Login")}
        />
      </View>
    );
  }