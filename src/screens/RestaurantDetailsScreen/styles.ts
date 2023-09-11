import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  page: {
    backgroundColor: "white",
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "white",
    // padding: 20,
    borderRadius: 25,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 15,
    color: "gray",
  },
});
