import { FlatList, Image, Text, View } from "react-native";
import { selectOrigin } from "../store/uberSlices";
import { useSelector } from "react-redux";
import { navData } from "@/constants/navData";
import { Link } from "expo-router";
import { TabBarIcon } from "./navigation/TabBarIcon";

export default function NavOptions() {
    const origin = useSelector(selectOrigin);
    return (
        <FlatList data={navData} horizontal
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <View
                    className={`mt-3 pl-6 p-4 bg-gray-200 mr-4 rounded-lg border border-gray-300`}>
                    <View className={`${origin ? "opacity-100" : "opacity-50"}`}>
                        <Image
                            source={item?.image}
                            style={{ width: 120, height: 120, resizeMode: "contain" }}/>
                        <Text className={`py-2 text-lg font-semibold`}>{item?.title}</Text>
                        <Link href={"/map"} disabled={!origin}>
                            <View
                                className={`p-2 bg-black rounded-full w-10 h-10 items-center justify-center`}>
                                <TabBarIcon name="arrow-forward" size={18} color="#ffffff" />
                            </View>
                        </Link>
                    </View>
                </View> 
            )}
        />
    );




}