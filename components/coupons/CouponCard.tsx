import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  date: string;
  time: string;
  category: string;
  branch: string;
  onPress?: () => void;
};

export default function CouponCard({
  title,
  date,
  time,
  category,
  branch,
  onPress,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.row}>
        <View style={styles.infoItem}>
          <Ionicons name="calendar-outline" size={18} color="#666" />
          <Text style={styles.infoText}>{date}</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="time-outline" size={18} color="#666" />
          <Text style={styles.infoText}>{time}</Text>
        </View>
      </View>

      <Text style={styles.category}>{category}</Text>

      <View style={styles.bottomRow}>
        <View style={styles.infoItem}>
          <Ionicons name="location-outline" size={18} color="#666" />
          <Text style={styles.branch}>{branch}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E0e0e0",
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#424242",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 10,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoText: {
    marginLeft: 5,
    fontSize: 13,
    color: "#424242",
  },

  category: {
    fontSize: 14,
    color: "#424242",
    marginBottom: 12,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  branch: {
    marginLeft: 5,
    fontSize: 14,
    color: "#424242",
  },

  button: {
    backgroundColor: "#F4f4f4",
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 6,
  },

  buttonText: {
    fontSize: 13,
    color: "#424242",
    fontWeight: "500",
  },
});
