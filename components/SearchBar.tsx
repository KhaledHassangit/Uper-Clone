import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { useAppDispatch } from "@/hooks/hooks";
import { setDestination, setOrigin } from "@/store/uberSlices";

export default function SearchBar() {
    const dispatch = useAppDispatch();

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
                `https://photon.komoot.io/api/?q=${encodeURIComponent(text)}&limit=5`
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
            setOrigin({
                location: { lat, lng },
                description: item.properties.name,
            })
        );

        dispatch(setDestination(null));

        setQuery(item.properties.name);
        setPlaces([]);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Where From?"
                value={query}
                onChangeText={searchPlaces}
                style={styles.input}
            />

            <FlatList
                data={places}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => handleSelect(item)}
                    >
                        <Text style={styles.title}>
                            {item.properties.name}
                        </Text>
                        <Text style={styles.sub}>
                            {item.properties.city ||
                                item.properties.country ||
                                item.properties.state}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginTop: 10,
    },
    input: {
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 15,
        fontSize: 16,
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#eee",
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