import { View, Pressable, Text, StyleSheet } from "react-native";

export default function CarPreference(props) {
    return (
        <View style={Style.container}>
            <Text>Loading Page</Text>
            <Pressable onPress={() => props.navigation.navigate("Home")}>
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