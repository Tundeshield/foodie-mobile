import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View, FlatList } from "react-native";
import { RestaurantItem } from "./src/components/RestaurantItem/RestaurantItem";
import restaurantList from "./assets/data/restaurants.json";
import { HomeScreen } from "./src/screens/HomeScreen";
import { RestaurantDetails } from "./src/screens/RestaurantDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <RestaurantDetails />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
