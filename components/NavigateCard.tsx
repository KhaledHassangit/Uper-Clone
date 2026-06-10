import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Container from "./Container";
import Title from "./Title";
import { useDispatch } from "react-redux";
import { setDestination } from "@/store/uberSlices";
import NavFavorite from "./NavFavorite";
import { TabBarIcon } from "./navigation/TabBarIcon";
import RiderCard from "./RiderCard";

export default function NavigateCard() {
  const [showRider, setShowRider] = useState(false);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState<any[]>([]);

  const searchPlaces = async (text: string) => {
    setQuery(text);

    if (text.length < 2) {
      setPlaces([]);
      return;
    }

    try {
      const res = await fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(text)}&limit=5`,
      );

      const data = await res.json();
      setPlaces(data.features || []);
    } catch (err) {
      console.log("Search error:", err);
    }
  };

  const handleSelect = (item: any) => {
    const [lng, lat] = item.geometry.coordinates;

    dispatch(
      setDestination({
        location: { lat, lng },
        description: item.properties.name,
      }),
    );

    setQuery(item.properties.name);
    setPlaces([]);
    setShowRider(true);
  };

  return (
    <Container className="">
      {showRider ? (
        <RiderCard setShowRider={setShowRider} />
      ) : (
        <>
          <Title className="text-xl text-center">Hello, Noor</Title>

          {/* SEARCH INPUT */}
          <View>
            <View style={styles.searchBox}>
              <TextInput placeholder="Where To ? " style={styles.input} onChangeText={searchPlaces}>
                {query}
              </TextInput>
            </View>

            {/* RESULTS */}
            {places.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.title}>{item.properties.name}</Text>

                <Text style={styles.sub}>
                  {item.properties.city ||
                    item.properties.state ||
                    item.properties.country}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <NavFavorite />

          {/* BOTTOM BUTTONS */}
          <View
            className={`flex-row bg-white justify-evenly py-2 mt-auto border-t border-t-gray-200`}
          >
            <TouchableOpacity
              onPress={() => setShowRider(true)}
              className={`flex-row items-center justify-between bg-black w-24 px-4 py-3 rounded-full`}
            >
              <TabBarIcon name="car" color={"white"} size={20} />
              <Text className={`text-white`}>Rides</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`flex flex-row items-center justify-between w-24 px-4 py-3 rounded-full border border-gray-300`}
            >
              <TabBarIcon name="fast-food-outline" color="black" size={20} />
              <Text className={`text-center ml-1`}>Eats</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Container>
  );
}
const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    height: 50,
    justifyContent: "center",
    marginTop: 10,
  },
  input: {
    fontSize: 16,
    color: "#000",
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  sub: {
    fontSize: 12,
    color: "#666",
  },
});
