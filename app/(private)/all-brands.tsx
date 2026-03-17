import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import BurgerKingLogo from "@/assets/images/brandLogos/burgerking.svg";
import McDonaldsLogo from "@/assets/images/brandLogos/mcdonalds.svg";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const brands = [
  {
    name: "McDonald’s",
    logo: McDonaldsLogo,
  },
  {
    name: "Pizza Hut",
    logo: require("@/assets/images/brandLogos/pizzahut.png"),
  },

  {
    name: "Burger King",
    logo: BurgerKingLogo,
  },
  {
    name: "Domino’s Pizza",
    logo: require("@/assets/images/brandLogos/dominos.png"),
  },
  {
    name: "Apple",
    logo: McDonaldsLogo,
  },
  {
    name: "Louis Vuitton",
    logo: McDonaldsLogo,
  },
  {
    name: "Lee Cooper",
    logo: McDonaldsLogo,
  },
  {
    name: "KFC",
    logo: McDonaldsLogo,
  },
];

export default function AllBrandsScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backRow} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={20} color="#333" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>All Brands</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* Search */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={22} color="#777" />
          <TextInput
            placeholder="Search here..."
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={22} color="#111" />
        </TouchableOpacity>
      </View>

      {/* Brand List */}
      <View style={styles.list}>
        {brands.map((item, index) => {
          const isSvg = typeof item.logo === "function";

          return (
            <TouchableOpacity key={index} style={styles.card}>
              <View style={styles.logoBox}>
                {isSvg ? (
                  <item.logo width={38} height={38} />
                ) : (
                  <Image source={item.logo} style={styles.logo} />
                )}
              </View>

              <View style={styles.info}>
                <Text style={styles.brandName}>{item.name}</Text>

                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <Ionicons
                      name="storefront-outline"
                      size={14}
                      color="#999"
                    />
                    <Text style={styles.metaText}>3 Outlets</Text>
                  </View>

                  <View style={styles.metaItem}>
                    <Ionicons name="pricetag-outline" size={14} color="#999" />
                    <Text style={styles.metaText}>6 Offers</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 55,
    marginBottom: 20,
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

  searchRow: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 52,
  },

  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
  },

  filterButton: {
    width: 52,
    height: 52,
    backgroundColor: "#fff",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    gap: 14,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    alignItems: "center",
  },

  logoBox: {
    width: 70,
    height: 70,
    backgroundColor: "#F8F8F8",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  info: {
    marginLeft: 14,
    flex: 1,
  },

  brandName: {
    fontSize: 22,
    fontWeight: "500",
    color: "#424242",
    marginBottom: 8,
  },

  metaRow: {
    flexDirection: "row",
    gap: 14,
  },

  metaItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  metaText: {
    fontSize: 14,
    color: "#878787",
    marginLeft: 4,
  },
});
