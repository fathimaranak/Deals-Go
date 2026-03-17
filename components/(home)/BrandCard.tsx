import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  logo: React.ReactNode;
};

export default function BrandCard({ logo }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.logoWrapper}>{logo}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 108,
    height: 78,
    backgroundColor: "#f4f4f4",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },

  logoWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});
