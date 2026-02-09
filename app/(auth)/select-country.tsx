import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const COUNTRIES = [
  {
    id: "sa",
    name: "Saudi Arabia",
    flag: require("../../assets/images/flags/ksa.png"),
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    flag: require("../../assets/images/flags/uae.png"),
  },
  {
    id: "oman",
    name: "Sultanate of Oman",
    flag: require("../../assets/images/flags/oman.png"),
  },
  {
    id: "kuwait",
    name: "Kuwait",
    flag: require("../../assets/images/flags/kuwait.png"),
  },
  {
    id: "qatar",
    name: "Qatar",
    flag: require("../../assets/images/flags/qatar.png"),
  },
  {
    id: "bahrain",
    name: "Bahrain",
    flag: require("../../assets/images/flags/bahrain.png"),
  },
];

export default function SelectCountry() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("sa");

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFD600" />

      {/* Header */}
      <View style={styles.header}>
        {/* Globe */}
        <Image
          source={require("../../assets/images/globe.png")}
          style={styles.globe}
        />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Select your{"\n"}country</Text>
      </View>

      {/* Country Grid */}
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isSelected = selected === item.id;

          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => setSelected(item.id)}
              activeOpacity={0.8}
            >
              {/* Check Icon */}
              <View style={styles.checkWrapper}>
                {isSelected ? (
                  <Ionicons name="checkmark-circle" size={22} color="#2ECC71" />
                ) : (
                  <View style={styles.emptyCircle} />
                )}
              </View>

              <Image source={item.flag} style={styles.flag} />

              <Text
                style={styles.countryName}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.back()}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  header: {
    backgroundColor: "#FDD209",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  globe: {
    position: "absolute",
    top: 54,
    right: 0,
    width: 140,
    height: 140,
    resizeMode: "contain",
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backText: {
    fontSize: 16,
    marginLeft: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0000",
  },

  listContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 120,
  },

  row: {
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    width: "48%",
    marginBottom: 16,
  },

  checkWrapper: {
    alignSelf: "flex-end",
  },

  emptyCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#E0E0E0",
  },

  flag: {
    position: "absolute", // 👈 KEY
    top: 12,
    left: 12,
    width: 48,
    height: 48,
    borderRadius: 18,
  },

  countryName: {
    marginTop: 60,
    fontSize: 18,
    textAlign: "left",
    color: "#333",
    width: "100%",
    paddingRight: 30,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#F4F4F4",
  },

  continueButton: {
    backgroundColor: "#E50914",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 45,
  },

  continueText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
