import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Title from "./Title";
import { Link, useRouter } from "expo-router";
import { suggestionsData } from "@/constants/navData";

const Suggestions = () => {
    const router = useRouter();
    return (
        <View className="mt-3">
            <View className="flex-row items-center justify-between">
                <Title className="text-xl">Suggestions</Title>
                <Link href="/services">
                    <Text className="text-base font-semibold">See all</Text>
                </Link>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={suggestionsData}
                horizontal
                keyExtractor={(item) => item?._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => router.push("/map")}
                        className="p-5 border border-gray-300 mt-3 mr-3 rounded-lg"
                    >
                        <Image
                            source={{ uri: item?.image }}
                            className="w-16 h-16 mb-3"
                            resizeMode="contain"
                        />
                        <Text>{item?.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Suggestions;