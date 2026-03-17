import McDonaldsLogo from "@/assets/images/brandLogos/mcdonalds.svg";
import FavouriteIcon from "@/assets/images/profile/favourites-icon.svg";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
  title: string;
  image: string;
  discount: string;
  locations?: string;
  fullWidth?: boolean;
  categoryLayout?: boolean;
};

export default function DealCard({
  title,
  image,
  discount,
  locations = "9+ Locations",
  fullWidth = false,
  categoryLayout = false,
}: Props) {
  return (
    <TouchableOpacity
      onPress={() => router.push("/(private)/shop-details")}
      style={[styles.card, fullWidth && styles.fullWidthCard]}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} />

        {/* Brand Logo */}
        <View style={categoryLayout ? styles.categoryLogoBox : styles.logoBox}>
          <McDonaldsLogo width={28} height={28} />
        </View>

        {/* Favourite */}
        {!categoryLayout && (
          <View style={styles.favouriteBox}>
            <FavouriteIcon width={18} height={18} />
          </View>
        )}

        {/* Location Badge */}
        <View
          style={[
            styles.locationBadge,
            categoryLayout && styles.categoryLocationBadge,
          ]}
        >
          <Text style={styles.locationText}>{locations}</Text>
        </View>
      </View>

      <View style={styles.content}>
        {categoryLayout ? (
          <>
            <View style={styles.topRow}>
              <Text style={styles.title}>{title}</Text>

              <Ionicons name="heart-outline" size={24} color="#000000" />
            </View>

            <View style={styles.bottomRow}>
              <View style={styles.discountBox}>
                <Text style={styles.discountText}>{discount}</Text>
              </View>

              <Text style={styles.categoryText}>Burger</Text>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.discountBox}>
              <Text style={styles.discountText}>{discount}</Text>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EAEAEA",
  },
  fullWidthCard: {
    width: "100%",
    marginBottom: 16,
    borderRadius: 10,
  },
  imageWrapper: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 190,
  },

  logoBox: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 42,
    height: 42,
    backgroundColor: "#ec2028",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryLogoBox: {
    position: "absolute",
    bottom: 18,
    left: 12,
    width: 42,
    height: 42,
    backgroundColor: "#d6001c",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  favouriteBox: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 34,
    height: 34,
    backgroundColor: "#fffff",
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },

  locationBadge: {
    position: "absolute",
    bottom: 18,
    left: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 4,
  },
  categoryLocationBadge: {
    left: undefined,
    right: 12,
    bottom: 18,
    width: undefined,
    alignSelf: "flex-start",
  },

  locationText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#424242",
  },

  content: {
    padding: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#424242",
    marginBottom: 10,
  },

  discountBox: {
    backgroundColor: "#fdd209",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9C103",
    alignSelf: "flex-start",
  },
  discountText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  categoryText: {
    fontSize: 14,
    color: "#878787",
  },
});
