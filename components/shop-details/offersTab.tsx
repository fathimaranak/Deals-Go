import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
};

export default function OffersTab({ expanded, setExpanded }: Props) {
  return (
    <TouchableOpacity
      style={styles.offerCard}
      onPress={() => router.push("/(private)/deal-details")}
    >
      <TouchableOpacity
        style={styles.offerTop}
        onPress={() => setExpanded(!expanded)}
      >
        <View style={styles.offerTextBox}>
          <Text style={styles.offerTitle}>BUY 2{"\n"}GET 1 FREE</Text>
          <Text style={styles.offerSub}>On Pastries & Desserts</Text>
          <Text style={styles.offerExpire}>Expires in 5 days</Text>
        </View>

        <View style={styles.arrowBox}>
          <Ionicons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={22}
            color="#424242"
          />
        </View>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.detailsBox}>
          <Text style={styles.detailsTitle}>Details and Exclusions</Text>

          <Text style={styles.detailsText}>
            Enjoy 15% off on all your favourite items at The Lily House Café!
            {"\n\n"}
            Whether you re grabbing a gourmet coffee, indulging in a refreshing
            smoothie, or sitting down for a delicious breakfast, lunch, or
            dessert platter, this cozy spot is perfect for relaxing with
            friends.
          </Text>
        </View>
      )}

      <View style={styles.offerBottom}>
        <Text style={styles.priceText}>QAR 1000</Text>

        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.redeemText}>Redeem Offer</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  offerCard: {
    marginHorizontal: 20,
    marginTop: 8,
    backgroundColor: "#FFF2F2",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FFDBDB",
  },

  offerTop: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  offerTextBox: {
    flex: 1,
    marginLeft: 14,
  },

  offerTitle: {
    fontSize: 20,
    color: "#AA1D67",
  },

  offerSub: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 8,
  },

  offerExpire: {
    fontSize: 14,
    color: "#878787",
    marginTop: 4,
  },

  arrowBox: {
    marginTop: -55,
  },

  detailsBox: {
    paddingHorizontal: 18,
    paddingBottom: 12,
  },

  detailsTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#424242",
  },

  detailsText: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: "500",
    color: "#424242",
    lineHeight: 18,
  },

  offerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    borderTopWidth: 1,
    borderTopColor: "#f1d7d7",
  },

  priceText: {
    fontSize: 18,
    color: "#424242",
  },

  redeemButton: {
    backgroundColor: "#ec2028",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 72,
  },

  redeemText: {
    color: "#fff",
  },
});
