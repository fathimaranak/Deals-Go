import BurgerKingLogo from "@/assets/images/brandLogos/burgerking.svg";
import McDonaldsLogo from "@/assets/images/brandLogos/mcdonalds.svg";
import PizzaHutLogo from "@/assets/images/brandLogos/pizzahut.svg";
import CategoriesIcon from "@/assets/images/tab-icons/categories.svg";
import BannerSlider from "@/components/(home)/BannerSlide";
import BrandCard from "@/components/(home)/BrandCard";
import CategoryCard from "@/components/(home)/CategoryCard";
import DealCard from "@/components/(home)/DealsCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const categories = [
    {
      title: "Food & Beverages",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      title: "Coffee",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      title: "Beauty & Health",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    },
    {
      title: "Grocery",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    },
    {
      title: "Activities",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
    {
      title: "Services",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    },
    {
      title: "Electronics",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      title: "Retail",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
  ];
  const brands = [
    { logo: <McDonaldsLogo width={59} height={59} /> },
    { logo: <PizzaHutLogo width={42} height={42} /> },
    { logo: <BurgerKingLogo width={59} height={59} /> },
    { logo: <McDonaldsLogo width={59} height={59} /> },
    { logo: <McDonaldsLogo width={59} height={59} /> },
    { logo: <PizzaHutLogo width={42} height={42} /> },
    { logo: <BurgerKingLogo width={42} height={42} /> },
    { logo: <McDonaldsLogo width={59} height={59} /> },
    { logo: <PizzaHutLogo width={42} height={42} /> },
    { logo: <BurgerKingLogo width={42} height={42} /> },
    { logo: <McDonaldsLogo width={59} height={59} /> },
    { logo: <PizzaHutLogo width={42} height={42} /> },
    { logo: <BurgerKingLogo width={42} height={42} /> },
    { logo: <McDonaldsLogo width={59} height={59} /> },
  ];

  const hotdeals = [
    {
      title: "McDonalds’",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      discount: "15% Student Discount",
    },
    {
      title: "McDonalds’",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      discount: "15% Student Discount",
    },
  ];
  const trendingDeals = [
    {
      title: "McDonalds’",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      discount: "15% Student Discount",
    },
    {
      title: "McDonalds’",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      discount: "15% Student Discount",
    },
  ];
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 25 }}
    >
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.flagRow}>
          <Image
            source={require("@/assets/images/flags/qatar.png")}
            style={styles.flag}
          />
          <Ionicons name="chevron-down" size={14} color="#333" />
        </View>

        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.rightIcons}>
          <Ionicons name="notifications-outline" size={24} color="#111" />

          <TouchableOpacity onPress={() => router.push("/(private)/profile")}>
            <Image
              source={require("@/assets/images/profile/profile-avatar.png")}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Find what you love,{"\n"}for less.</Text>

      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={22} color="#424242" />
        <TextInput
          placeholder="Search here..."
          placeholderTextColor="#878787"
          style={styles.input}
        />
      </View>

      {/* Banner */}
      <BannerSlider />

      {/* Categories Header */}
      <View style={styles.sectionHeader}>
        <View style={styles.sectionLeft}>
          <CategoriesIcon width={18} height={18} color="#EC2028" />
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>

        <View style={styles.viewAllRow}>
          <Text style={styles.viewAll}>View All</Text>
          <Ionicons name="chevron-forward" size={14} color="#EC2028" />
        </View>
      </View>

      {/* Categories Grid */}
      <View style={styles.categoriesGrid}>
        {categories.map((item, index) => (
          <CategoryCard key={index} title={item.title} image={item.image} />
        ))}
      </View>
      <TouchableOpacity style={styles.viewOthersButton}>
        <Text style={styles.viewOthersText}>Others</Text>
      </TouchableOpacity>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionLeft}>
          <Ionicons
            name="pricetag-outline"
            size={18}
            color="#EC2028"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.sectionTitle}>Top Brands</Text>
        </View>

        <TouchableOpacity
          style={styles.viewAllRow}
          onPress={() => router.push("/all-brands")}
        >
          <Text style={styles.viewAll}>View All</Text>
          <Ionicons name="chevron-forward" size={14} color="#EC2028" />
        </TouchableOpacity>
      </View>
      {/*brand*/}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.brandScroll}
      >
        {Array.from({ length: Math.ceil(brands.length / 2) }).map(
          (_, colIndex) => {
            const first = brands[colIndex * 2];
            const second = brands[colIndex * 2 + 1];

            return (
              <View key={colIndex} style={styles.brandColumn}>
                {first && <BrandCard logo={first.logo} />}
                {second && <BrandCard logo={second.logo} />}
              </View>
            );
          },
        )}
        {/*hotdeals*/}
      </ScrollView>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionLeft}>
          <Ionicons
            name="flame-outline"
            size={18}
            color="#ec2028"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.sectionTitle}>Hot Deals</Text>
        </View>

        <View style={styles.viewAllRow}>
          <Text style={styles.viewAll}>View All</Text>
          <Ionicons name="chevron-forward" size={14} color="#ec2028" />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dealScroll}
      >
        {hotdeals.map((item, index) => (
          <DealCard
            key={index}
            title={item.title}
            image={item.image}
            discount={item.discount}
          />
        ))}
        {/*trending deals*/}
      </ScrollView>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionLeft}>
          <Ionicons
            name="trending-up-outline"
            size={18}
            color="#ec2028"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.sectionTitle}>Trending in Deals Go</Text>
        </View>

        <View style={styles.viewAllRow}>
          <Text style={styles.viewAll}>View All</Text>
          <Ionicons name="chevron-forward" size={14} color="#ec2028" />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dealScroll}
      >
        {trendingDeals.map((item, index) => (
          <DealCard
            key={index}
            title={item.title}
            image={item.image}
            discount={item.discount}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },

  flagRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  flag: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 4,
  },

  logo: {
    width: 90,
    height: 45,
    marginTop: 20,
  },

  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111",
    marginTop: 30,
    lineHeight: 42,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: 14,
    paddingHorizontal: 14,
    marginTop: 20,
    height: 56,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "black",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },

  sectionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 19,

    color: "#424242",
  },

  viewAllRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  viewAll: {
    color: "#ec2028",
    fontSize: 14,
    fontWeight: "500",
  },

  viewOthersButton: {
    backgroundColor: "#f4f4f4",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  viewOthersText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#424242",
  },

  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 20,
  },
  brandScroll: {
    marginTop: 16,
    paddingBottom: 8,
  },
  brandColumn: {
    marginRight: 12,
  },
  dealScroll: {
    marginTop: 16,
    paddingBottom: 12,
  },
});
