import { Text, TextStyle } from "react-native";
import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
    style?: TextStyle;
}

const Title = ({ children, className = "", style }: Props) => {
    return (
        <Text
            style={style}
            className={`text-5xl font-semibold ${className}`}
        >
            {children}
        </Text>
    );
};

export default Title;