import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function LocationsTab() {
  const locations = [
    "Marina Way 31, Doha",
    "Marina Way 31, Doha",
    "Katara Cultural Village, Doha, Qatar",
    "Katara Cultural Village, Doha, Qatar",
    "AlNuaimi Area, Doha, Qatar",
    "AlNuaimi Area, Doha, Qatar",
  ];

  return (
    <View style={styles.locationCard}>
      <Text style={styles.locationTitle}>
        TBrew & BeYasmine is available at 6 locations
      </Text>

      {locations.map((item, index) => (
        <View
          key={index}
          style={[
            styles.locationRow,
            index === locations.length - 1 && styles.lastLocationRow,
          ]}
        >
          <Ionicons name="location-outline" size={18} color="#878787" />

          <View style={styles.locationTextBox}>
            <Text style={styles.locationMain}>{item}</Text>
            <Text style={styles.locationSub}>
              Parcel 18 Fountain Roundabout Pearl Qatar.
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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

  lastLocationRow: {
    borderBottomWidth: 0,
  },

  locationTextBox: {
    marginLeft: 10,
    flex: 1,
  },

  locationMain: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  locationSub: {
    fontSize: 12,
    color: "#878787",
    marginTop: 4,
  },
});
