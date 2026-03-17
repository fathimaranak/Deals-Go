import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  image: any;
  city: string;
  outlets: string;
};

export default function LocationCard({ image, city, outlets }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.row}>
        <Ionicons name="location-outline" size={18} color="#555" />
        <Text style={styles.city}>{city}</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="storefront-outline" size={16} color="#888" />
        <Text style={styles.outlets}>{outlets}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 20,
    paddingTop: 16,
    marginBottom: 18,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 14,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  city: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 6,
    color: "#424242",
  },

  outlets: {
    fontSize: 15,
    color: "#878787",
    marginLeft: 6,
  },
});
