import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import restuaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { BasketItem } from "./components/BasketItem";

const restaurant = restuaurants[0];

interface DishDetailsScreenProps {
  title: string;
  description: string;
}
export const BasketScreen = ({
  title = restaurant.name,
}: DishDetailsScreenProps) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.header}>Your Items</Text>
      <FlatList
        data={restaurant.dishes}
        keyExtractor={(item, index) => index.toString()} // if item doesn't have a unique id
        renderItem={({ item, index }) => <BasketItem {...item} />}
      />

      {/* Add to cart */}
      <View style={styles.Button}>
        <Text style={styles.buttonText}>Create order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
    marginVertical: 40,
    width: "100%",
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginVertical: 10,
  },
  quantity: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 20,
  },

  Button: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    padding: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
