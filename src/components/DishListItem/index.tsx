import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Dish } from "../../../assets/types/restaurant";

interface DishListItemProps {
  dish: Dish;
}

export const DishListItem: React.FC<DishListItemProps> = ({
  dish,
}: DishListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name} numberOfLines={2}>
          {dish.name}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>£{dish.price}</Text>
      </View>
      {dish.image && (
        <View>
          <Image source={{ uri: dish.image }} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 15,
    opacity: 0.7,
    marginVertical: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    height: 100,
    borderRadius: 15,
    aspectRatio: 1,
  },
});
