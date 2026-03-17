import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  image: any;
  active?: boolean;
  onPress?: () => void;
};

export default function SubCategoryCard({
  title,
  image,
  active,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, active && styles.activeCard]}
    >
      <Image source={image} style={styles.image} />

      <Text style={[styles.title, active && styles.activeTitle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 92,
    backgroundColor: "#f4f4f4",
    borderRadius: 14,
    padding: 8,
    marginRight: 12,
    alignItems: "center",
  },

  activeCard: {
    backgroundColor: "#ec2028",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 8,
  },

  title: {
    fontSize: 12,
    fontWeight: "500",
    color: "#424242",
    textAlign: "center",
  },

  activeTitle: {
    color: "#fff",
  },
});
