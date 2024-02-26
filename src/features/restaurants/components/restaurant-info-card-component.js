import React from "react";
import styled from "styled-components";
import { StyleSheet } from "react-native";
import { Text, Card, Button, Avatar } from "react-native-paper";

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

const RestaurantCard = styled(Card)`
  background-color: red;
`;

const RestaurantCardCover = styled(Card.Cover)`
  color: red;
  padding: 22px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Bala Clava",
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
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />

      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 16,
  },
});
