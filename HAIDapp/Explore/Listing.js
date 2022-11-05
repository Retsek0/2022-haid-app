import { View, ImageBackground, Text, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Listing(props) {
    return(
        <View>
            <ImageBackground 
                source={props.listing.image}
                style={{height: 130, width: 350, overflow: 'visible'}}
                imageStyle={{
                    justifyContent: 'center', 
                    alignItems: 'center',
                    borderRadius: 25,
                    paddingTop: 50,
                }}
            >
                <Text style={styles.innerText}>{props.listing.name}</Text>
            </ImageBackground>
            <View style={styles.bottomText}>
                <View style={{flexDirection: "row"}}>
                    <FontAwesome name={"star"} size={12} color={"grey"} style={{paddingTop:4, paddingRight: 4}}/>
                    <Text>4.6</Text>
                </View>
                <Text>£10</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        fontSize: 30,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    bottomText: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30
    }
});