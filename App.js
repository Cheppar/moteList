import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import {
  useFonts as useRoboto,
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
} from "@expo-google-fonts/roboto-condensed";

import {
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const isAndroid = Platform.OS === "android";
console.log(StatusBar.currentHeight);

export default function App() {
  const [robotoLoaded] = useRoboto({
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,

    RobotoCondensed_700Bold_Italic,
  });

  if (!robotoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
