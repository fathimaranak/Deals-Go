import { Feather, Ionicons } from "@expo/vector-icons";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LocationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={22} color="#fff" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.headerContent}>
          <Text style={styles.title}>Select Your{"\n"}Location</Text>

          <Image
            source={require("@/assets/images/location-vector.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Search */}
        <View style={styles.searchBox}>
          <Feather name="search" size={20} color="#777" />
          <TextInput
            placeholder="Search for area, street name..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* Current Location Button */}
        <TouchableOpacity style={styles.locationButton}>
          <View style={styles.locationRow}>
            <Ionicons name="locate-outline" size={20} color="#fff" />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={styles.locationTitle}>Use current location</Text>

              <View style={styles.divider} />

              <Text style={styles.locationSubtitle}>
                Enable GPS to detect your location
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Recent Locations */}
        <View style={styles.recentHeader}>
          <Ionicons name="location-outline" size={16} color="#ff2a2a" />
          <Text style={styles.recentText}> Recent Locations</Text>
        </View>

        <View style={styles.card}>
          {[
            {
              title: "Marina Way 31, Doha,",
              subtitle: "Parcel 18 Fountain Roundabout Pearl Qatar.",
            },
            {
              title: "Katara Cultural Village, Doha, Qatar",
              subtitle: "Katara Hills, Katara Cultural Village, Doha, Qatar",
            },
            {
              title: "Alnuaimi Area, Doha, Qatar",
              subtitle: "CMR+P5P Alnuaimi Area, Doha, Qatar",
            },
          ].map((item, index) => (
            <View
              key={index}
              style={[styles.locationItem, index !== 2 && styles.borderBottom]}
            >
              <Ionicons name="time-outline" size={18} color="#999" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  topSection: {
    backgroundColor: "#000",
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 100,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    bottom: -25,
    marginLeft: -2,
  },

  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 1,
  },

  headerContent: {
    position: "relative",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 28,
    bottom: -80,
  },

  image: {
    width: 250,
    height: 250,
    position: "absolute",
    right: -30,
    bottom: -145,
  },

  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 16,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
    color: "#000",
  },

  locationButton: {
    backgroundColor: "#424242",
    borderRadius: 12,
    padding: 14,
    marginBottom: 22,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  locationTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#666",
    marginVertical: 6,
  },

  locationSubtitle: {
    color: "#F4F4F4",
    fontSize: 12,
    marginTop: 2,
  },

  recentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  recentText: {
    fontSize: 18,
    color: "#444",
    fontWeight: "500",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
  },

  locationItem: {
    flexDirection: "row",
    padding: 14,
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },

  itemSubtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 3,
  },
});
