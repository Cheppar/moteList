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
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}}px`};
`;

const Search = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Listing = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <Search>
      <Searchbar placeholder="Search" />
    </Search>
    <Listing>
      <RestaurantInfoCard />
    </Listing>
  </SafeArea>
);
