import { SafeAreaView, View, StyleSheet, TextInput, Keyboard } from 'react-native';
import Button from './components/Button';
import React, { useState } from 'react';
import { evaluate, log } from 'mathjs';

export default function App() {
    const [input, setInput] = useState("");

    const addOperator = (op) => {
        let exp = input;
        const last = exp.charAt(exp.length - 1);
        if (
            (
                last === "*" ||
                last === "+" ||
                last === "-" ||
                last === "/" 
            )  &&
            (
                op === "*" ||
                op === "+" ||
                op === "-" ||
                op === "/" 
            )
        ) {
            exp = exp.slice(0, -1) + op;
            setInput(exp);
            return;
        }

        if (last === ")" && op === ")") {
            return;
        }

        exp = exp + op;
        setInput(exp);

    };

    const caculate = () => {
        try {
            let inputString = input.toString();

            if (inputString === "") {
                return;
            }

            // Replace "ln" with "log"
            inputString = inputString.replace(/\bln\b/g, "log");

            // Replace "√(expression)" with sqrt(expression)"
            inputString = inputString.replace("√(", "sqrt(");

            console.log(inputString);

            const last = inputString.charAt(input.length - 1);

            if (
                last === "/" ||
                last === "+" ||
                last === "-" ||
                last == "*" ||
                last == "."
            ) {
                inputString = inputString.slice(0, inputString.length - 1);
            }

            // caculate the result
            var result = evaluate(inputString);

            console.log(result);


            // if the result is a long decimal, then round it to 6 decimal places
            result = result.toFixed(6);

            // if the result is an integer, then remove the decimal
            result = parseFloat(result);

            result = result.toString();

            setInput(result);
        } catch (error) {
            alert("Invalid format used");
        }
    };

    const clear = () => {
        setInput(input.slice(0, input.length - 1));
    };

    const handleFocus = (e) => {
        e.preventDefault();
    }

    return (
        <View style={styles.container}>
            {/* SafeAreaView is a component that renders content within the safe area boundaries of a device. 
            It is used to avoid content from being blocked by notches, camera, and other elements that are located in the safe area. */}
            <SafeAreaView>
                <TextInput
                    maxLength={15}
                    value={input}
                    style={styles.input}
                    showSoftInputOnFocus={false}
                />
                <View style={styles.row}>
                    <Button
                        text="√x"
                        theme="primary"
                        onPress={() => addOperator("√(")}
                    />
                    <Button
                        text="x^2"
                        theme="primary"
                        onPress={() => addOperator("^2")}
                    />
                    <Button
                        text="2^x"
                        theme="primary"
                        onPress={() => addOperator("2^")}
                    />
                    <Button
                        text="ln(x)"
                        theme="primary"
                        onPress={() => addOperator("ln(")}
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text="AC"
                        theme="secondary"
                        onPress={() => setInput("")}
                    />
                    <Button
                        text="DEL"
                        theme="secondary"
                        onPress={() => clear()}
                    />
                    <Button
                        text="x!"
                        theme="primary"
                        onPress={() => addOperator("!")}
                    />
                    <Button
                        text="/"
                        theme="primary"
                        onPress={() => addOperator("/")}
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
                        text="*"
                        theme="primary"
                        onPress={() => addOperator("*")}
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
                        onPress={() => addOperator("-")}
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
                        onPress={() => addOperator("+")}
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text=")"
                        theme="primary"
                        onPress={() => addOperator(")")}
                    />
                    <Button
                        text="0"
                        theme="primary"
                        onPress={() => setInput(prev => prev + "0")}
                    />
                    <Button
                        text="."
                        theme="primary"
                        onPress={() => addOperator(".")}
                    />
                    <Button
                        text="="
                        theme="white"
                        onPress={() => caculate()}
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
        fontSize: 50,
        textAlign: "right",
        color: "#91afb7",
        fontWeight: "400",
        padding: 10,
    },
});