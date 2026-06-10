import Container from '@/components/Container'
import { View } from "react-native";
import React from "react";
import Title from "@/components/Title";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function Activity() {
    return (
        <Container>
            <Title>Activity</Title>
            <View className={`py-3 flex-row items-center justify-between`}>
                <View
                    className={`w-10 h-10 rounded-full bg-black items-center justify-center`}
                >
                    <TabBarIcon name="options" size={20} color={"white"} />
                </View>
                <Title className="text-xl">Past</Title>
            </View>
            <Title className="text-lg font-normal mt-3">
                You don't have any recent activities
            </Title>
        </Container>

    );
}

