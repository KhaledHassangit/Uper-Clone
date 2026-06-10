import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                tabBarInactiveTintColor:
                    colorScheme === "dark" ? "#6b7280" : "#9BA1A6",

                tabBarStyle: {
                    backgroundColor:
                        colorScheme === "dark" ? "#151718" : "#ffffff",

                    borderTopColor: "transparent",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="services"
                options={{
                    title: "Services",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "apps" : "apps-outline"}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="activity"
                options={{
                    title: "Activity",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "document" : "document-outline"}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "person" : "person-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}