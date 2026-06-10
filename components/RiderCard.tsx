import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { uberLux, uberX, uberXL } from "@/assets/images";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { selectTravelTimeInformation } from "@/store/uberSlices";
import { useSelector } from "react-redux";
import { useNavigation } from "expo-router";

type RideOption = {
  _id: string;
  title: string;
  multiplier: number;
  image: any;
};

const data: RideOption[] = [
  {
    _id: "normal-car",
    title: "Normal",
    multiplier: 1.0,
    image: uberX,
  },
  {
    _id: "ac-car",
    title: "Air Condition Car",
    multiplier: 1.3,
    image: uberLux,
  },
];

const CHARGE_RATE = 1.7;

const RiderCard = ({ setShowRider }: any) => {
  const [selected, setSelected] = useState<RideOption | null>(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation) || {
    distance: { text: "No distance", value: 0 },
    duration: { text: "No duration", value: 0 },
  };

  const navigation = useNavigation();

  return (
    <View className="-mt-8">
      <View>
        <TouchableOpacity
          onPress={() => setShowRider(false)}
          className="absolute top-1 left-5 rounded-full bg-gray-200 p-1 z-50"
        >
          <TabBarIcon name="arrow-back" size={20} />
        </TouchableOpacity>
        <Text className="text-center font-medium text-lg mb-2">
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`flex-row items-center justify-between rounded-md px-2 ${
              item._id === selected?._id ? "bg-gray-200" : "bg-white"
            }`}
          >
            <Image
              source={item.image}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <View className="flex-1 ml-2">
              <Text className="text-xl font-semibold">{item.title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel time</Text>
            </View>
            <Text className="text-lg font-semibold self-start text-right">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelTimeInformation?.duration?.value *
                  CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        className={`py-3 mt-1 rounded-md ${
          selected ? "bg-black" : "bg-gray-300"
        }`}
        disabled={!selected}
        onPress={() => navigation.goBack()}
      >
        <Text className="text-white text-center text-lg font-semibold">
          Choose {selected?.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RiderCard;