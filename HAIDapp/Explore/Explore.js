import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import Listing from './Listing';
import { listings } from '../assets/listings';

export default function Explore(props) {
    return (
        <View style={styles.container}>
            <View style={{height: 50, backgroundColor: 'powderblue'}}/>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <View>
                    {listings.map((listing, i) => {
                        return <Listing key={i} imageBackground={listing.imageBackground}/>
                    })}
                </View>
            </ScrollView>
        </View>
    );
}
    
const styles = StyleSheet.create({
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