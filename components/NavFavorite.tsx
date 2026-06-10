import { View, Text, FlatList, TouchableOpacity } from "react-native";

const NavFavorite = () => {
  const data = [
    {
      _id: "301",
      icon: "home",
      location: "Home",
      destination: "Mirpur 11, Dhaka, Bangladesh",
    },
    {
      _id: "302",
      icon: "briefcase",
      location: "Work",
      destination: "Mirpur 10, Dhaka, Bangladesh",
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item?._id}
      ItemSeparatorComponent={() => (
        <View className={`bg-gray-300 h-1`} /> 
      )}
      renderItem={({ item }) => (
        <TouchableOpacity className={`flex-row items-center p-5`}>
          <View>
            <Text className={`font-semibold text-lg`}>{item?.location}</Text>
            <Text className={`text-gray-500`}>{item?.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorite;