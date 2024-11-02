import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Button from './components/Button';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={[styles.marginBottom, styles.text]}>Caculator</Text>
            <StatusBar />
            {/* SafeAreaView is a component that renders content within the safe area boundaries of a device. 
            It is used to avoid content from being blocked by notches, camera, and other elements that are located in the safe area. */}
            <SafeAreaView>
                <View style={styles.row}>
                    <Button
                        text="C"
                        theme="secondary"
                    />
                    <Button
                        text="()"
                        theme="primary"
                    />
                    <Button
                        text="%"
                        theme="primary"
                    />
                    <Button
                        text="÷"
                        theme="primary"
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text="7"
                        theme="primary"
                    />
                    <Button
                        text="8"
                        theme="primary"
                    />
                    <Button
                        text="9"
                        theme="primary"
                    />
                    <Button
                        text="x"
                        theme="primary"
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text="4"
                        theme="primary"
                    />
                    <Button
                        text="5"
                        theme="primary"
                    />
                    <Button
                        text="6"
                        theme="primary"
                    />
                    <Button
                        text="-"
                        theme="primary"
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text="1"
                        theme="primary"
                    />
                    <Button
                        text="2"
                        theme="primary"
                    />
                    <Button
                        text="3"
                        theme="primary"
                    />
                    <Button
                        text="+"
                        theme="primary"
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text="+/-"
                        theme="primary"
                    />
                    <Button
                        text="0"
                        theme="primary"
                    />
                    <Button
                        text="."
                        theme="primary"
                    />
                    <Button
                        text="="
                        theme="white"
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#020202",
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 30,
    },
    marginBottom: {
        marginBottom: 20,
    },
});