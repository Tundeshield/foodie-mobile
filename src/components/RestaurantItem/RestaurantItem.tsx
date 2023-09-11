import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Restaurant } from "../../../assets/types/restaurant";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

export const RestaurantItem: React.FC<RestaurantItemProps> = ({
  restaurant,
}: RestaurantItemProps) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.name}</Text>

      <View style={styles.row}>
        <View>
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
        <View style={styles.rating}>
          <Text style={styles.subTitle}>{restaurant.rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 5,
  },
  subTitle: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    backgroundColor: "#e6e6e6",
    padding: 5,
    borderRadius: 100,
    marginLeft: "auto",
  },
});
