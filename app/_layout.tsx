import Layout from "@/components/Layout";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Layout>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="map" options={{ headerShown: false }} />
      </Stack>
    </Layout>
  );
}
