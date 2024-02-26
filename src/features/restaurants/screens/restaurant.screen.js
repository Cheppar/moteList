import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import {
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card-component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: 22px;
`;

const Search = styled.View`
  padding: 16px;
`;

const Listing = styled.View`
  flex: 1;
  background-color: skyblue;
  padding: 16px;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <Search>
      <Searchbar />
    </Search>
    <Listing>
      <RestaurantInfoCard />
    </Listing>
  </SafeArea>
);
