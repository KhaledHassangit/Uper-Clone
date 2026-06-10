import Container from "@/components/Container";
import { View, Text, Image } from "react-native";

import SearchBar from "@/components/SearchBar";
import NavOptions from "@/components/NavOptions";
import Suggestions from "@/components/Suggestions";
import Title from "@/components/Title";

export default function HomeScreen() {
  return (
    <Container>
      <Image
        source={{ uri: "https://i.ibb.co.com/Xz5pKDQ/logo-black.png" }}
        style={{ width: 96, height: 40 }}
        resizeMode="contain"
      />

      <SearchBar />

      <NavOptions />
      <Suggestions />
      <View >
        <Title className="text-lg pt-2">Uber Ride Policy</Title>
        <Text style={{ fontSize: 14, letterSpacing: 0.5 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, qui
          eligendi. Ea vel, nostrum rem perspiciatis exercitationem minima est
          rerum voluptatem molestiae quae? Molestiae labore veniam, consectetur
          pariatur cupiditate earum atque libero animi ea laborum architecto
          dicta sapiente porro error nesciunt, nemo adipisci maiores unde,
          incidunt culpa fugiat consequuntur ullam.
        </Text>
      </View>
    </Container>
  );
}