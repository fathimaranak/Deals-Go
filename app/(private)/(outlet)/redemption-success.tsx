import { Ionicons } from "@expo/vector-icons";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import Svg, { Circle, Path } from "react-native-svg";
export default function RedeemedSuccessScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {/* Top Left SVG */}
      <Svg width={230} height={230} style={styles.topLeftSvg}>
        <Path d="M0 0 H230 V0 A230 230 0 0 1 0 230 Z" fill="#d7f7c5" />
      </Svg>

      <View style={styles.topRightQuarter} />
      <View style={styles.smallDot1} />
      <View style={styles.smallDot2} />

      {/* Bottom Left SVG */}
      <Svg
        width={90}
        height={180}
        style={styles.leftHalfCircle}
        viewBox="0 0 90 180"
      >
        <Circle cx="90" cy="90" r="90" fill="#d7f7c5" />
      </Svg>
      <Svg
        width={90}
        height={90}
        style={styles.upperQuarter}
        viewBox="0 0 90 90"
      >
        <Path d="M0 0 H90 A90 90 0 0 1 0 90 Z" fill="#d7f7c5" />
      </Svg>

      {/* Bottom Right */}
      <View style={styles.bottomRightShape} />

      {/* Header */}
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>

      {/* Success Circle */}
      <View style={styles.checkCircle}>
        <Ionicons name="checkmark" size={70} color="#13A52A" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Successfully Redeemed!</Text>

      {/* Description */}
      <Text style={styles.description}>
        Your booking has been confirmed and you ve earned 150 reward points. A
        confirmation email has been sent to your registered email address.
      </Text>

      {/* Card */}
      <View style={styles.card}>
        <View>
          <Text style={styles.cardLabel}>Redemption ID</Text>
          <Text style={styles.cardNumber}>12345678</Text>
        </View>

        <Ionicons name="copy-outline" size={22} color="#111" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9fce1",
    alignItems: "center",
  },

  closeButton: {
    alignSelf: "flex-start",
    marginTop: 50,
    marginLeft: 20,
  },

  closeText: {
    fontSize: 16,
    color: "#444",
  },

  checkCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 7,
    borderColor: "#13A52A",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 160,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    marginTop: 28,
  },

  description: {
    width: 250,
    textAlign: "center",
    fontSize: 14,
    color: "#7A7A7A",
    lineHeight: 20,
    marginTop: 12,
  },

  card: {
    width: 235,
    backgroundColor: "#c8f4b9",
    borderRadius: 12,
    marginTop: 28,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardLabel: {
    fontSize: 12,
    color: "#666",
  },

  cardNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginTop: 4,
  },

  /* SVG positions */

  topLeftSvg: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  leftHalfCircle: {
    position: "absolute",
    bottom: 4,
    left: 0,
  },

  upperQuarter: {
    position: "absolute",
    bottom: 94,
    left: 90,
  },

  /* Dots */
  topRightQuarter: {
    position: "absolute",
    width: 68,
    height: 68,
    backgroundColor: "#d7f7c5",
    top: 92,
    right: 38,
    borderTopRightRadius: 68,
  },
  smallDot1: {
    position: "absolute",
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#d7f7c5",
    top: 118,
    right: 128,
  },

  smallDot2: {
    position: "absolute",
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#d7f7c5",
    top: 180,
    right: 62,
  },

  bottomRightShape: {
    position: "absolute",
    width: 100,
    height: 100,
    backgroundColor: "#d7f7c5",
    bottom: 0,
    right: 0,
  },
});
