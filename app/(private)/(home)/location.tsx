import LocationCard from "@/components/(home)/LocationCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function LocationScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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

      {/* Cards */}
      <View style={styles.cards}>
        <LocationCard
          image={require("@/assets/images/location.jpg")}
          city="Thiruvananthapuram"
          outlets="3 Outlets"
        />

        <LocationCard
          image={require("@/assets/images/location.jpg")}
          city="Thiruvananthapuram"
          outlets="5 Outlets"
        />

        <LocationCard
          image={require("@/assets/images/location.jpg")}
          city="Thiruvananthapuram"
          outlets="3 Outlets"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
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

  cards: {
    padding: 16,
  },
});
