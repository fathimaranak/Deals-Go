import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
type Props = {
  title: string;
  image: string;
};

export default function CategoryCard({ title, image }: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push("/(private)/food-beverages")}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "23%",

    backgroundColor: "#F4F4F4",
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  image: {
    width: 52,
    height: 52,
    borderRadius: 10,
    marginBottom: 12,
    marginTop: -10,
  },

  title: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
    color: "#424242",
  },
});
