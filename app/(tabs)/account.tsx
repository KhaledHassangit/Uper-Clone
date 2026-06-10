import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

type IconNames =
    | "aperture-sharp"
    | "mail-unread"
    | "document"
    | "person"
    | "settings-sharp";

const accountData: { title: string; icon: IconNames }[] = [
    { title: "Help", icon: "aperture-sharp" },
    { title: "Payment", icon: "mail-unread" },
    { title: "Activity", icon: "document" },
];

const accountList: { title: string; icon: IconNames }[] = [
    { title: "Settings", icon: "settings-sharp" },
    { title: "Messages", icon: "mail-unread" },
    { title: "Earn by driving or delivering", icon: "document" },
    { title: "Set up your business profile", icon: "document" },
    { title: "Manage Uber account", icon: "person" },
    { title: "Legal", icon: "document" },
];

const Account = () => {
    return (
        <Container>
            {/* Header */}
            <View className="flex-row items-center justify-between">
                <View>
                    <Title>John Doe</Title>

                    <View className="flex-row bg-black w-16 py-1 justify-between items-center px-2 rounded-lg mt-1">
                        <TabBarIcon name="star" size={15} color="white" />
                        <Text className="text-base text-white">5.0</Text>
                    </View>
                </View>

                <View className="w-12 h-12 rounded-full bg-[#00000050] items-center justify-center">
                    <TabBarIcon name="person" color="#dddddd" />
                </View>
            </View>

            {/* Content */}
            <ScrollView
                className="mt-3 mb-28"
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                {/* Top cards */}
                <View className="flex-row items-center justify-between">
                    {accountData.map((item) => (
                        <TouchableOpacity
                            key={item.title}
                            className="bg-black w-[30%] py-3 items-center justify-center rounded-lg"
                        >
                            <TabBarIcon name={item.icon} color="white" />
                            <Text className="text-white mt-3 font-medium">
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* List */}
                <View className="mt-5">
                    {accountList.map((item) => (
                        <TouchableOpacity
                            key={item.title}
                            className="flex-row items-center mb-3 bg-gray-100 py-2 px-2 rounded-md"
                        >
                            <TabBarIcon name={item.icon} size={20} />
                            <Text className="text-lg font-medium ml-3">
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Text */}
                <Text className="text-sm font-semibold mt-2 leading-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </Text>
            </ScrollView>
        </Container>
    );
};

export default Account;