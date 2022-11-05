import { View, ImageBackground, Text, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from '@expo/vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Listing(props) {
    return(
        <View>
            <View style={{backgroundColor: "black", borderRadius: 25}}>
                <ImageBackground 
                    source={props.listing.image}
                    style={styles.backgroundImg}
                    imageStyle={{
                        justifyContent: 'center', 
                        alignItems: 'center',
                        borderRadius: 25,
                        paddingTop: 50,
                        opacity: 0.5
                    }}
                >
                    <Icon name="heart" style={styles.heart} size={20} />
                    <Text style={styles.innerText}>{props.listing.name}</Text>
                </ImageBackground>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: "row"}}>
                    <FontAwesome 
                        name={props.listing.rating <= 2 ? "star-o" : (props.listing.rating < 4 ? "star-half-empty" : "star")}
                        size={16} 
                        color={"black"} 
                        style={{paddingTop:2, paddingRight: 4}}
                    />
                    <Text style={styles.ratingtxt}>{props.listing.rating}</Text>
                </View>
                <Text style={styles.pricetxt}>£{props.listing.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: "700",
        textAlign: "center",
        color: "white",
        marginVertical: 20,
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },

    ratingtxt: {
        fontSize: 15,
        fontWeight: "900",
        color: "black"
    },  

    pricetxt: {
        fontSize: 15,
        fontWeight: "400"
    },

    backgroundImg: {
        height: 160, 
        width: 350, 
        overflow: 'visible',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0,
        shadowRadius: 2, 
    },

    heart: {
        color: "red",
        textAlign: "right",
        marginHorizontal: "90%",
        marginVertical: 10,
        width: 20,
        height: 20,
        borderRadius: "20"
    },
});