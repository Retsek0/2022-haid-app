import { Text, View, ScrollView, StyleSheet, Pressable } from 'react-native';

export default function Explore(props) {
    return (
        <View style={styles.container}>
            <View style={{height: 50, backgroundColor: 'powderblue'}}/>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 25,
                    padding: 20
                }}>
                    <Pressable style={styles.listing}>
                        <Text>Test</Text>
                    </Pressable>
                    <Pressable style={styles.listing}>
                        <Text>Test</Text>
                    </Pressable>
                    <Pressable style={styles.listing}>
                        <Text>Test</Text>
                    </Pressable>
                    <Pressable style={styles.listing}>
                        <Text>Test</Text>
                    </Pressable>
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

{/*    return (
        <View>
            <View style={{height: 50, backgroundColor: 'powderblue'}}/>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', borderColor: 'red', borderWidth: 2 }}>
                <Pressable style={styles.listing}>
                    <Text>Test</Text>
                </Pressable>
                <Pressable style={styles.listing}>
                    <Text>Test</Text>
                </Pressable>
                <Pressable style={styles.listing}>
                    <Text>Test</Text>
                </Pressable>
                <Pressable style={styles.listing}>
                    <Text>Test</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: "red",
        alignItems: "center"
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
})*/}