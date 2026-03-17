import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  logo: React.ReactNode;
  name: string;
  outlets: string;
  offers: string;
  onPress?: () => void;
};

export default function BrandListCard({
  logo,
  name,
  outlets,
  offers,
  onPress,
}: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.logoBox}>{logo}</View>

      <View style={styles.info}>
        <Text style={styles.brandName}>{name}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="storefront-outline" size={14} color="#878787" />
            <Text style={styles.metaText}>{outlets}</Text>
          </View>

          <View style={styles.metaItem}>
            <Ionicons name="pricetag-outline" size={14} color="#878787" />
            <Text style={styles.metaText}>{offers}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    alignItems: "center",
    marginBottom: 14,
  },

  logoBox: {
    width: 70,
    height: 70,
    backgroundColor: "#F8F8F8",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
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
