import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Montserrat_700Bold } from "@expo-google-fonts/montserrat"; // ใช้อันนี้แทน
import { Stack } from "expo-router";
import "../global.css";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    poppinsRegular: Poppins_400Regular,
    poppinsBold: Poppins_700Bold,
    montserrat: Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
