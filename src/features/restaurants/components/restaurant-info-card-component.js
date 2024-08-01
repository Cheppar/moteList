import React from "react";
import styled from "styled-components";
import { StyleSheet } from "react-native";
import { Text, Card, Button, Avatar } from "react-native-paper";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[0]};
`;

const RestaurantCardContent = styled(Card.Content)``;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Merica Hotel",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "895-20100, Nakuru",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />

      <RestaurantCardContent>
        <Title>{name}</Title>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
