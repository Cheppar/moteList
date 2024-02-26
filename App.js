import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";

import {
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const isAndroid = Platform.oS === "android";
console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <RestaurantsScreen />
    </>
  );
}
