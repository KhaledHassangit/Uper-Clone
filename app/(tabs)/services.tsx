import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Image,
} from "react-native";
import React from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { suggestionsData } from "@/constants/navData";

const { width } = Dimensions.get("window");

const Services = () => {
    return (
        <Container>
            <Title>Services</Title>

            <View style={{ paddingVertical: 12 }}>
                <Title style={{ fontSize: 20, marginBottom: 20 }}>
                    Go anywhere, get anything
                </Title>

                <FlatList
                    data={suggestionsData}
                    numColumns={2}
                    keyExtractor={(item) => item?._id}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                width: width / 2 - 20,
                                marginBottom: 10,
                                backgroundColor: "black",
                                borderRadius: 10,
                                paddingVertical: 30,
                                paddingHorizontal: 15,
                            }}
                        >
                            <Image
                                source={{ uri: item?.image }}
                                style={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: "flex-end",
                                    resizeMode: "contain",
                                }}
                            />

                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 16,
                                    fontWeight: "600",
                                    marginTop: 10,
                                }}
                            >
                                {item?.title}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </Container>
    );
};

export default Services;