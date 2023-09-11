import React, { useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import restuaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";

const dish = restuaurants[0].dishes[0];

interface DishDetailsScreenProps {
  title: string;
  description: string;
}
export const DishDetailsScreen = ({
  title = dish.name,
  description = dish.description,
}: DishDetailsScreenProps) => {
  const [quantity, setQuantity] = useState(0);
  const quantityRef = useRef(0);
  const price = "£" + dish.price * quantity;

  const getPrice = (price: number) => {
    return "£" + (price * quantity).toFixed(2);
  };
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.seperator} />

      <View style={styles.quantityRow}>
        {/* Minus */}
        <AntDesign
          name="minuscircleo"
          size={60}
          color="black"
          disabled={quantity === 0}
          onPress={() => setQuantity((prevValue) => prevValue - 1)}
        />
        {/* Number */}
        <Text style={styles.quantity}>{quantity}</Text>
        {/* Plus */}
        <AntDesign
          name="pluscircleo"
          size={60}
          color="black"
          onPress={() => setQuantity((prevValue) => prevValue + 1)}
        />
      </View>
      {/* Add to cart */}
      <View style={styles.Button}>
        <Text style={styles.buttonText}>
          Add {quantity} to cart &#8226; {getPrice(dish.price)}
        </Text>
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
  seperator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  quantity: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  quantityRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
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
