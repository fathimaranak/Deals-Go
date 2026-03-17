import DealCard from "@/components/(home)/DealsCard";
import SubCategoryCard from "@/components/(home)/subCategoryCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function FoodBeveragesScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const subCategories = [
    {
      title: "Arabic & Grill",
      image: require("@/assets/images/categories/arabic-grill.png"),
    },
    {
      title: "Pizza & Pasta",
      image: require("@/assets/images/categories/pizza-pasta.png"),
    },
    {
      title: "Fine Dining",
      image: require("@/assets/images/categories/finedining.png"),
    },
    {
      title: "Indian",
      image: require("@/assets/images/categories/indian.png"),
    },
  ];
  const dealsByCategory = {
    0: [
      {
        title: "McDonalds’",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        discount: "15% Student Discount",
      },
      {
        title: "Burger King",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
        discount: "15% Student Discount",
      },
    ],

    1: [
      {
        title: "Pizza Hut",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        discount: "15% Student Discount",
      },
      {
        title: "Dominos",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
        discount: "15% Student Discount",
      },
    ],

    2: [
      {
        title: "Fine Dining",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
        discount: "15% Student Discount",
      },
    ],

    3: [
      {
        title: "Indian Curry",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
        discount: "15% Student Discount",
      },
    ],
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 25 }}
    >
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backRow} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={20} color="#fff" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.headerContent}>
          <Text style={styles.title}>Food &{"\n"}Beverages</Text>

          <Image
            source={require("@/assets/images/categories/burger.png")}
            style={styles.headerimage}
          />
        </View>
      </View>
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={22} color="#424242" />
          <TextInput
            placeholder="Search here..."
            placeholderTextColor="#878787"
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={22} color="#111" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.subCategoryScroll}
      >
        {subCategories.map((item, index) => (
          <SubCategoryCard
            key={index}
            title={item.title}
            image={item.image}
            active={selectedIndex === index}
            onPress={() => setSelectedIndex(index)}
          />
        ))}
      </ScrollView>
      <View style={styles.dealsContainer}>
        {dealsByCategory[selectedIndex as keyof typeof dealsByCategory].map(
          (item, index) => (
            <DealCard
              key={index}
              title={item.title}
              image={item.image}
              discount={item.discount}
              fullWidth
              categoryLayout
            />
          ),
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "#EC2028",
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  backRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 4,
  },

  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#fff",
    lineHeight: 38,
  },

  headerimage: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    position: "absolute",
    right: -80,
    bottom: -107,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 18,
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 52,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#111",
  },

  filterButton: {
    width: 52,
    height: 52,
    backgroundColor: "#f3f3f3",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  subCategoryScroll: {
    paddingHorizontal: 20,
    marginTop: 18,
    paddingBottom: 8,
  },
  dealsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 30,
  },
});
