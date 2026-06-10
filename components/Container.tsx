import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: Props) => {
    return (
        <SafeAreaView
            style={{
                backgroundColor: "white",
                flex: 1,
                marginTop: Platform.OS === "android" ? 10 : 0
            }}>
            <View style={{ paddingHorizontal: 20, }}>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default Container;