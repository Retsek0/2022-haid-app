import { View, Pressable, Text, StyleSheet } from "react-native";

export default function CarPreference(props) {
    console.log(props.route);
    return (
        <View style={Style.container}>
            <Text>Car Preference</Text>
            <Pressable onPress={() => props.route.params.exit()}>
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