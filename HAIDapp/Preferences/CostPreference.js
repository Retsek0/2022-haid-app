import { View, Pressable, Text, StyleSheet } from "react-native";

export default function CostPreference(props) {
    return (
        <View style={Style.container}>
            <Text>Cost Preference</Text>
            <Pressable onPress={() => props.navigation.navigate("StayPreference")}>
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