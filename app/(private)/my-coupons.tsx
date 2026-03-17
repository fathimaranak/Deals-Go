import CouponCard from "@/components/coupons/CouponCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MyCouponsScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backRow}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={20} color="#424242" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>My Coupons</Text>

          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Coupon List */}
      <View style={styles.list}>
        <CouponCard
          title="BUY 2 GET 1 FREE"
          date="Dec 15, 2024"
          time="06:00 PM"
          category="On Pastries & Desserts"
          branch="Main Branch"
        />

        <CouponCard
          title="BUY 2 GET 1 FREE"
          date="Dec 15, 2024"
          time="06:00 PM"
          category="On Pastries & Desserts"
          branch="Downtown Studio"
        />

        <CouponCard
          title="BUY 2 GET 1 FREE"
          date="Dec 15, 2024"
          time="06:00 PM"
          category="On Pastries & Desserts"
          branch="Wellness Centre"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  headerWrapper: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  backRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    fontSize: 18,
    color: "#424242",
    marginLeft: 4,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#424242",
  },

  list: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
