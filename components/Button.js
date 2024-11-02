import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    textPrimary: {
        color: "#91afb7",
        fontSize: 25
    },
    textSecondary: {
        color: "#d3352b"
    },
    textWhite: {
        color: "#fff"
    },
    button: {
        backgroundColor: "#0f1316",
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        margin: 10
    },
    buttonSecondary: {
        backgroundColor: "#dd2d29",
    },
    buttonWhite: {
        backgroundColor: "#3f636f",
    },
});

export default ({ onPress, text, theme }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.textPrimary];

    if (theme === "secondary") {
        textStyles.push(styles.textSecondary);
    }
    
    if (theme === "primary") {
        buttonStyles.push(styles.buttonPrimary);
    }

    if (theme === "white") {
        buttonStyles.push(styles.buttonWhite);
        textStyles.push(styles.textWhite);
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    );
};