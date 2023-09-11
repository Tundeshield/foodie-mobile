import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { Restaurant } from "../../../assets/types/restaurant";
import { DishListItem } from "../../components/DishListItem";
import { styles } from "./styles";

export const Header = ({ image, name , deliveryFee ,minDeliveryTime, maxDeliveryTime }: Restaurant) => {
  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {"£" +
            deliveryFee +
            "  " +
            minDeliveryTime +
            " - " +
            maxDeliveryTime +
            " min "}
        </Text>
      </View>
    </View>
  );
};
