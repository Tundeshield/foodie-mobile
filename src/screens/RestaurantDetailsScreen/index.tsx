import { View, Text, FlatList, Image } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { Restaurant } from "../../../assets/types/restaurant";
import { DishListItem } from "../../components/DishListItem";
import { Header } from "./Header";
import { styles } from "./styles";

const restaurantData = restaurants[0];

interface RestaurantDetailsProps {
  restaurant: Restaurant;
}

export const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  restaurant = restaurantData,
}: RestaurantDetailsProps) => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={<Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item, index }) => (
          <DishListItem dish={item} key={index} />
        )}
      />
      <View style={styles.iconContainer}>
        <AntDesign name="arrowleft" size={30} color="black" />
      </View>
    </View>
  );
};
