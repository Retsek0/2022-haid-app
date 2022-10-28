import { Button, View } from "react-native";

export default function Login(props) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-between', height: 100, backgroundColor: 'steelblue', flexDirection:"row"}}>
            <View style={{ paddingLeft:40 }}>
                <Button 
                    title="A" /* This will need to be replaced with an search icon and text saying "Explore" */
                    onPress={() => props.onPress("Activity A")}
                />
            </View>
            <View>
                <Button 
                    title="B" /* This will need to be replaced with a heart icon and text saying "Saved" */
                    onPress={() => props.onPress("Activity B")}
                />
            </View>
            <View style={{ paddingRight:40 }}>
                <Button 
                    title="C" /* This will need to be replaced with the logo and text saying "Bookings" */
                    onPress={() => props.onPress("Activity C")}
                />
            </View>
        </View>
    );
}