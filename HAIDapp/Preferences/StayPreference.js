import { View, Pressable, Text, StyleSheet } from "react-native";

export default function StayPreference(props) {
    return (
        <View style={Style.container}>
            <Text>Stay Preference</Text>
            <Pressable onPress={() => props.navigation.navigate("CarPreference")}>
                <Text>Next</Text>
            </Pressable>
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});