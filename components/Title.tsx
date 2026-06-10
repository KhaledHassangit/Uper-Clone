import { Text } from "react-native";
import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Title = ({ children, className }: Props) => {
    return (
        <Text
            className={`text-5xl font-semibold${className ? ` ${className}` : ""}`}
        >
            {children}
        </Text>
    );
};

export default Title;