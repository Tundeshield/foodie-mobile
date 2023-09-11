import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface BasketItemProps {
  name: string;
  price: number;
  quantity?: number;
}

export const BasketItem = ({ quantity = 1, name, price }: BasketItemProps) => {
  return (
    <>
      <View style={styles.quantityRow}>
        <View style={styles.quantityContainer}>
          <Text>{quantity}</Text>
        </View>
        <Text style={{ fontWeight: "600" }}>{name}</Text>
        <Text style={{ marginLeft: "auto" }}>£{price}</Text>
      </View>
      <View style={styles.seperator} />
    </>
  );
};

const styles = StyleSheet.create({
  quantityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    marginVertical: 10,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    padding: 5,
    borderRadius: 3,
    marginHorizontal: 10,
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
});
