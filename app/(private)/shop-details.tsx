import McDonaldsLogo from "@/assets/images/brandLogos/mcdonalds.svg";
import AboutTab from "@/components/shop-details/aboutTab";
import LocationsTab from "@/components/shop-details/locationsTab";
import OffersTab from "@/components/shop-details/offersTab";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function ShopDetailsScreen() {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("offers");

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backRow} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={20} color="#333" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Shop Details</Text>

        <View style={styles.openBadge}>
          <Text style={styles.openText}>Open</Text>
        </View>
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={require("@/assets/images/categories/mcburger.jpg")}
          style={styles.banner}
        />
      </View>

      {/* Info Card */}
      {/* Main White Container */}
      <View style={styles.mainCard}>
        {/* Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.dotsRow}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.activeDot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <View style={styles.shopRow}>
            <View style={styles.logoBox}>
              <McDonaldsLogo width={54} height={54} />
            </View>

            <View style={styles.shopTextBox}>
              <Text style={styles.shopName}>
                Brew & BeYasmine Palace{"\n"} Restaurant Coffee{" "}
              </Text>
              <Text style={styles.shopSubText}>Coffee Shop • Cafe</Text>
            </View>
          </View>

          <View style={styles.statsBox}>
            <View style={styles.statItem}>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={22} color="#ffb700" />
                <Text style={styles.statValue}>4.8</Text>
              </View>

              <Text style={styles.statLabel}>324 reviews</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.statItem}>
              <Ionicons name="git-network" size={20} color="#ec2028" />
              <Text style={styles.statLabel}>6 Branches</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.statItem}>
              <Ionicons name="time" size={20} color="#0088ff" />
              <Text style={styles.statLabel}>Until 10:00 PM</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsRow}>
          <TouchableOpacity
            style={activeTab === "offers" ? styles.activeTab : styles.tabButton}
            onPress={() => setActiveTab("offers")}
          >
            <Ionicons
              name="pricetag-outline"
              size={18}
              color={activeTab === "offers" ? "#fff" : "#878787"}
            />
            <Text
              style={
                activeTab === "offers" ? styles.activeTabText : styles.tabText
              }
            >
              Offers
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              activeTab === "locations" ? styles.activeTab : styles.tabButton
            }
            onPress={() => setActiveTab("locations")}
          >
            <Ionicons
              name="location-outline"
              size={18}
              color={activeTab === "locations" ? "#fff" : "#878787"}
            />
            <Text
              style={
                activeTab === "locations"
                  ? styles.activeTabText
                  : styles.tabText
              }
            >
              Locations
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={activeTab === "about" ? styles.activeTab : styles.tabButton}
            onPress={() => setActiveTab("about")}
          >
            <Ionicons
              name="storefront-outline"
              size={18}
              color={activeTab === "about" ? "#fff" : "#878787"}
            />
            <Text
              style={
                activeTab === "about" ? styles.activeTabText : styles.tabText
              }
            >
              About
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "offers" && (
          <OffersTab expanded={expanded} setExpanded={setExpanded} />
        )}

        {activeTab === "locations" && <LocationsTab />}

        {activeTab === "about" && <AboutTab />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 16,
  },

  backRow: { flexDirection: "row", alignItems: "center" },

  backText: { fontSize: 18, color: "#424242", marginLeft: 4 },

  headerTitle: { fontSize: 20, fontWeight: "700", color: "#424242" },

  openBadge: {
    borderWidth: 1,
    borderColor: "#0FA125",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    backgroundColor: "#E2FFE7",
  },

  openText: { color: "#0FA125", fontSize: 14, fontWeight: "500" },

  bannerContainer: {
    width: "100%",
    height: 220,
    backgroundColor: "#f8f8f8",
  },

  banner: { width: "100%", height: "100%" },

  mainCard: {
    backgroundColor: "#fff",
    marginTop: -20,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 18,
    paddingBottom: 30,
  },

  infoSection: {
    paddingHorizontal: 20,
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#cecece",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 28,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#cecece",
    marginHorizontal: 4,
  },

  logoBox: {
    width: 78,
    height: 78,
    backgroundColor: "#ec2028",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  shopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  shopTextBox: { marginLeft: 14 },

  shopName: { fontSize: 22, fontWeight: "500", color: "#424242" },

  shopSubText: { fontSize: 14, color: "#878787", marginTop: 4 },

  statsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  statItem: { flex: 1, alignItems: "center" },

  statValue: { fontSize: 18, marginTop: 4 },

  statLabel: { fontSize: 13, color: "#424242", marginTop: 4 },

  divider: {
    width: 1,
    height: 45,
    backgroundColor: "#e0e0e0",
  },

  tabsRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 18,
    marginHorizontal: 20,
  },

  activeTab: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ec2028",
    borderRadius: 14,
    paddingVertical: 10,
  },

  activeTabText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 4,
  },

  tabButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 14,
    paddingVertical: 10,
  },

  tabText: {
    color: "#878787",
    fontSize: 16,
    marginLeft: 4,
  },

  offerCard: {
    marginHorizontal: 20,
    marginTop: 8,
    backgroundColor: "#FFF2F2",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FFDBDB",
  },
  arrowBox: {
    marginTop: -55,
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
    fontWeight: 700,
    marginTop: 8,
  },

  offerExpire: {
    fontSize: 14,
    color: "#878787",
    marginTop: 4,
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
    fontWeight: 500,
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
    color: "#ffffff",
  },
  locationCard: {
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#f4f4f4",
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },

  locationTitle: {
    fontSize: 13,
    color: "#878787",
    marginBottom: 6,
  },

  locationRow: {
    flexDirection: "row",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  locationTextBox: {
    marginLeft: 10,
    flex: 1,
  },

  locationMain: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },

  locationSub: {
    fontSize: 12,
    color: "#878787",
    marginTop: 4,
  },
  lastLocationRow: {
    borderBottomWidth: 0,
  },
  aboutCard: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  addressText: {
    marginLeft: 8,
    fontSize: 13,
    color: "#888",
  },

  aboutText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#444",
  },

  galleryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 14,
  },

  galleryTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 6,
    color: "#444",
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
