import { SafeAreaView, View, StyleSheet, TextInput } from 'react-native';
import Button from './components/Button';
import React, { useState } from 'react';

export default function App() {
    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
            {/* SafeAreaView is a component that renders content within the safe area boundaries of a device. 
            It is used to avoid content from being blocked by notches, camera, and other elements that are located in the safe area. */}
            <SafeAreaView>
                <TextInput
                    maxLength={7}
                    value={input}
                    keyboardType="number-pad"
                    showSoftInputOnFocus={false}
                    style={styles.input}
                    editable={false}
                />
                <View style={styles.row}>
                    <Button
                        text="√x"
                        theme="primary"
                    />
                    <Button
                        text="x^2"
                        theme="primary"
                    />
                    <Button
                        text="2^x"
                        theme="primary"
                    />
                    <Button
                        text="log(x)"
                        theme="primary"
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text="C"
                        theme="secondary"
                        onPress={() => setInput("")}
                    />
                    <Button
                        text="x!"
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
                        onPress={() => setInput(prev => prev + "7")}
                    />
                    <Button
                        text="8"
                        theme="primary"
                        onPress={() => setInput(prev => prev + "8")}
                    />
                    <Button
                        text="9"
                        theme="primary"
                        onPress={() => setInput(prev => prev + "9")}
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
                        onPress={() => setInput(prev => prev + "4")}
                    />
                    <Button
                        text="5"
                        theme="primary"
                        onPress={() => setInput(prev => prev + "5")}
                    />
                    <Button
                        text="6"
                        theme="primary"
                        onPress={() => setInput(prev => prev + "6")}
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
                        onPress={() => setInput(prev => prev + "1")}
                    />
                    <Button
                        text="2"
                        theme="primary"
                        onPress={() => setInput(prev => prev + "2")}
                    />
                    <Button
                        text="3"
                        theme="primary"
                        onPress={() => setInput(prev => prev + "3")}
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
    marginBottom: {
        marginBottom: 20,
    },
    input: {
        width: "auto",
        height: "30%",
        fontSize: 75,
        textAlign: "right",
        color: "#91afb7",
        fontWeight: "400",
        padding: 10,
    },
});