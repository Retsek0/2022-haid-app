import { Button, View } from "react-native";

export default function ActivityMenu(props) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-between', height: 100, backgroundColor: 'steelblue', flexDirection:"row"}}>
            <View style={{ paddingLeft:40 }}>
                <Button 
                    title="A" /* This will need to be replaced with an search icon and text saying "Explore" */
                    onPress={() => props.navigationRef.current.navigate("Explore")}
                />
            </View>
            <View>
                <Button 
                    title="B" /* This will need to be replaced with a heart icon and text saying "Saved" */
                    onPress={() => props.navigationRef.current.navigate("Saved")}
                />
            </View>
            <View style={{ paddingRight:40 }}>
                <Button 
                    title="C" /* This will need to be replaced with the logo and text saying "Bookings" */
                    onPress={() => props.navigationRef.current.navigate("Bookings")}
                />
            </View>
        </View>
    );
}