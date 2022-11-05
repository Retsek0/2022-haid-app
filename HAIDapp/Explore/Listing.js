import { View, ImageBackground, Text, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Listing(props) {
    return(
        <View>
            <View style={{backgroundColor: "black", borderRadius: 25}}>
                <ImageBackground 
                    source={props.listing.image}
                    style={{height: 130, width: 350, overflow: 'visible'}}
                    imageStyle={{
                        justifyContent: 'center', 
                        alignItems: 'center',
                        borderRadius: 25,
                        paddingTop: 50,
                        opacity: 0.7
                    }}
                >
                    <Text style={styles.innerText}>{props.listing.name}</Text>
                </ImageBackground>
            </View>
            <View style={styles.bottomText}>
                <View style={{flexDirection: "row"}}>
                    <FontAwesome 
                        name={props.listing.rating <= 2 ? "star-o" : (props.listing.rating < 4 ? "star-half-empty" : "star")}
                        size={12} 
                        color={"grey"} 
                        style={{paddingTop:4, paddingRight: 4}}
                    />
                    <Text>{props.listing.rating}</Text>
                </View>
                <Text>£{props.listing.price}</Text>
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
        color: "white"
    },
    bottomText: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30
    }
});