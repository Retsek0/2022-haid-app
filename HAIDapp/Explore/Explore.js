import { View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import Listing from './Listing';
import { listings } from '../assets/listings';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Explore(props) {
    return (
        <View style={styles.container}>
            <View style={{ height: 50 }}/>
            <View style={styles.filter}>
                <Pressable style={styles.filterOption}>
                    <FontAwesome5 name={"plane"} size={40} color={"grey"} style={{paddingTop:6}}/>
                    <Text style={{paddingTop:6}}>Flights</Text>
                </Pressable>
                <Pressable style={styles.filterOption}>
                    <MaterialIcons name={"hotel"} size={54} color={"grey"}/>
                    <Text>Hotels</Text>
                </Pressable>
                <Pressable style={styles.filterOption}>
                    <FontAwesome5 name={"car-side"} size={42} color={"grey"} style={{paddingTop:6}}/>
                    <Text style={{paddingTop:6}}>Car Hire</Text>
                </Pressable>
            </View>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <View>
                    {listings.map((listing, i) => {
                        return <Listing key={i} listing={listing}/>
                    })}
                </View>
            </ScrollView>
        </View>
    );
}
    
const styles = StyleSheet.create({
    filter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 100,
    },

    filterOption: {
        paddingLeft: 25,
        paddingRight: 25,
        alignItems: "center"
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1'
    },

    listing: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#3F6A84',
        paddingVertical: 8,
        width: "30%",
        borderRadius: 23,
    },
});