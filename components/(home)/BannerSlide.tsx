import { Image, ScrollView, StyleSheet, View } from "react-native";

const banners = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349",
  "https://images.unsplash.com/photo-1561758033-d89a9ad46330",
  "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
];

export default function BannerSlider() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {banners.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: item }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
  },

  card: {
    marginRight: 12,
  },

  image: {
    width: 320,
    height: 170,
    borderRadius: 18,
  },
});
