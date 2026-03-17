import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AboutTab() {
  return (
    <View style={styles.aboutCard}>
      <View style={styles.addressRow}>
        <View style={styles.infoIconBox}>
          <Ionicons name="alert" size={14} color="#111" />
        </View>
        <Text style={styles.addressText}>
          Parcel 18 Fountain Roundabout Pearl Qatar.
        </Text>
      </View>

      <Text style={styles.aboutText}>
        <Text style={styles.aboutText}>
          Brew & BeYasmine Palace Restaurant Coffee offers a warm and relaxing
          dining experience where guests can enjoy premium coffee, fresh
          pastries, and carefully prepared meals in an elegant atmosphere.
          {"\n\n"}
          Whether you re meeting friends, taking a short break, or enjoying a
          peaceful evening, the restaurant combines quality taste with
          comfortable surroundings to create a memorable experience.
          {"\n\n"}
          From signature beverages to delicious desserts and full-course meals,
          every item is prepared with attention to detail and high-quality
          ingredients.
        </Text>
      </Text>

      <View style={styles.galleryHeader}>
        <Ionicons name="images-outline" size={18} color="#ec2028" />
        <Text style={styles.galleryTitle}>Gallery</Text>
      </View>

      <View style={styles.galleryGrid}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Image
            key={index}
            source={require("@/assets/images/categories/gallery.png")}
            style={styles.galleryImage}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutCard: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  infoIconBox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#f5d000",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#111",
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  addressText: {
    marginLeft: 8,
    fontSize: 13,
    color: "#878787",
  },

  aboutText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#444",
    fontWeight: 500,
    marginLeft: 30,
  },

  galleryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 14,
  },

  galleryTitle: {
    fontSize: 24,

    marginLeft: 6,
    color: "#424242",
  },

  galleryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  galleryImage: {
    width: "23%",
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});
