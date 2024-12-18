import { StatusBar } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Loading from "@components/Loading";

import { config } from "./config/gluestack-ui.config";
import { GluestackUIProvider, Text, Center } from "@gluestack-ui/themed";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular: Roboto_400Regular });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      {!fontsLoaded ? (
        <Center flex={1} bg="$primary900">
          <Text>Home</Text>
        </Center>
      ) : (
        <Loading />
      )}
    </GluestackUIProvider>
  );
}
