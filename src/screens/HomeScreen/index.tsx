import { StyleSheet, FlatList, View } from "react-native";
import { RestaurantItem } from "../../components/RestaurantItem/RestaurantItem";
import restaurantList from "../../../assets/data/restaurants.json";

export const HomeScreen = () => {
  return (
    <View style={styles.homePage}>
      <FlatList
        data={restaurantList}
        renderItem={({ item, index }) => (
          <RestaurantItem restaurant={item} key={index} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    padding: 10,
  },
});
