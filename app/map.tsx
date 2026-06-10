import { View } from "react-native";
import Container from "@/components/Container";
import NavigateCard from "@/components/NavigateCard";
import MapContent from "@/components/MapContent";

export default function Map() {
    return (
        <Container className="p-0">
            <View className={`h-1/2`}>
                <MapContent />
            </View>
            <View className={`h-1/2`}>
                <NavigateCard />
            </View>
        </Container>
    );


}