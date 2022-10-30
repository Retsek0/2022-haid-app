import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default function Explore(props) {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <View style={{height: 50, backgroundColor: 'powderblue'}}/>
            <ScrollView /* Each listing hardcoded for now, but in future should be mapped from an array into a series of <Listing> components */>
                <View style={styles.listing}><Text>1</Text></View>
                <View style={styles.listing}><Text>2</Text></View>
                <View style={styles.listing}><Text>3</Text></View>
                <View style={styles.listing}><Text>4</Text></View>
                <View style={styles.listing}><Text>5</Text></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    listing: {
        backgroundColor: "red",
        width: "90%"
    }
})