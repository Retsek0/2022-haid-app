import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Cart(props) {
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Cart</Text>
            <View style={Styles.itemsContainer}>
                <Text style={Styles.item}>Flight to Ibiza</Text>
                    <Text style={Styles.details}>       - Outbound: Friday, January 13th 2023, 9:00</Text>
                    <Text style={Styles.details}>       - Return: Monday, January 16th 2023, 17:10</Text>
                <Text style={Styles.item}>Chevrolet Spark</Text>
                    <Text style={Styles.details}>       - Pick-up: Friday, January 13th 2023</Text>
                    <Text style={Styles.details}>       - Drop-off: Monday, January 16th 2023</Text>
                <Text style={Styles.item}>Stanton's Holidays</Text>
                    <Text style={Styles.details}>       - Check-in: Friday, January 13th 2023, 15:00</Text>
                    <Text style={Styles.details}>       - Check-out: Monday, January 16th 2023, 9:30</Text>
            </View>
            <Pressable onPress={() => props.navigation.navigate("Payment")}>
                <Text style= {Styles.gotopayment}> Go To Payment </Text>
            </Pressable>   
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    gotopayment: {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#3F6A84',
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: "30%",
        borderRadius: 23,
        color: "white"
    },
    title: {
        fontSize: 32,
        borderBottomColor: "grey",
        borderBottomWidth: 2,
        marginBottom: 20,
        paddingHorizontal: 40,
        fontStyle: "bold"
    },
    itemsContainer: {
        alignItems: "baseline",
        width: "75%"
    },
    details: {
        color: "grey",
    }

})