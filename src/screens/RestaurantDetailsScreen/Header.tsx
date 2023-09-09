import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { Restaurant } from "../../../assets/types/restaurant";
import { DishListItem } from "../../components/DishListItem";
import { styles } from "./styles";

export const Header = ({ restaurant }) => {
  return (
    <View>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          {"£" +
            restaurant.deliveryFee +
            "  " +
            restaurant.minDeliveryTime +
            " - " +
            restaurant.maxDeliveryTime +
            " min "}
        </Text>
      </View>
    </View>
  );
};
