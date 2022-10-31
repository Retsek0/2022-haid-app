import { ImageBackground, Text, StyleSheet } from 'react-native';

export default function Listing(props) {
    return(
        <ImageBackground 
            source={props.ImageBackground}
            style={{height: 130, width: 350, overflow: 'visible'}}
            imageStyle={{
                justifyContent: 'center', 
                alignItems: 'center',
                borderRadius: 25,
                paddingTop: 50,
            }}
        >
            <Text style={styles.innerText}>Test</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    innerText: {
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
});