import McDonaldsLogo from "@/assets/images/brandLogos/mcdonalds.svg";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function OfferDetailsScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backRow}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={20} color="#424242" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Deal Details</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* Banner */}
        <View style={styles.bannerWrapper}>
          <Image
            source={require("@/assets/images/categories/mcburger.jpg")}
            style={styles.banner}
          />
        </View>

        <View style={{ height: 20 }} />

        {/* Discount */}
        <View style={styles.discountRow}>
          <View>
            <Text style={styles.discountTitle}>30% OFF ON ALL BURGER</Text>
            <Text style={styles.discountSubtitle}>MEALS</Text>
          </View>
        </View>

        <View style={{ height: 20 }} />

        {/* Details Card */}
        <View style={styles.combinedCard}>
          <Text style={styles.infoTitle}>On Pastries & Desserts</Text>
          <Text style={styles.infoSub}>Expires in 5 days</Text>

          <View style={styles.divider} />

          <Text style={styles.detailsTitle}>Details and Exclusions</Text>
          <Text style={styles.detailsText}>
            Enjoy 15% off on all your favourite items at The Lily House Café!
            Whether you re grabbing a gourmet coffee, indulging in a refreshing
            smoothie, or sitting down for a delicious breakfast, lunch, or
            dessert platter, this cozy spot is perfect for relaxing with friends
            or taking a peaceful break from daily stress.
          </Text>
        </View>

        {/* Brand Card */}
        <View style={styles.brandCard}>
          <View style={styles.brandRow}>
            <View style={styles.logoBox}>
              <McDonaldsLogo width={34} height={34} />
            </View>

            <View>
              <Text style={styles.brandName}>Mc Donald’s</Text>
              <Text style={styles.brandCategory}>Coffee Shop • Cafe</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.price}>QAR 1000</Text>

        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.redeemText}>Redeem Offer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  content: {
    padding: 16,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 30,
  },

  backRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    fontSize: 18,
    marginLeft: 4,
    color: "#424242",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#424242",
  },

  bannerWrapper: {
    borderRadius: 16,
    overflow: "hidden",
  },

  banner: {
    width: "100%",
    height: 210,
  },

  discountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  discountTitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#424242",
    marginLeft: 10,
  },

  discountSubtitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#424242",
    marginLeft: 10,
  },

  combinedCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    borderColor: "#f1f0f0",
  },

  divider: {
    height: 1,
    backgroundColor: "#f1f0f0",
    marginVertical: 12,
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },

  infoSub: {
    fontSize: 13,
    color: "#424242",
  },

  detailsTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
    color: "#424242",
  },

  detailsText: {
    fontSize: 13,
    color: "#424242",
    lineHeight: 22,
    fontWeight: 500,
  },

  brandCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 18,
  },

  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  logoBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#EC2028",
    justifyContent: "center",
    alignItems: "center",
  },

  brandName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#424242",
  },

  brandCategory: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },

  price: {
    fontSize: 22,
    fontWeight: "500",
    color: "#424242",
  },

  redeemButton: {
    backgroundColor: "#EC2028",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 22,
  },

  redeemText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
});
