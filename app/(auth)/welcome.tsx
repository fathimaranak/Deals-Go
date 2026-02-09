import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import WelcomeBg from "../../assets/images/backgrounds/welcome-logo-bg.svg";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFFFFF" />

      {/* SVG BACKGROUND */}
      <View style={styles.svgWrapper}>
        <WelcomeBg width="100%" height={320} />
      </View>

      {/* LOGO */}
      <View style={styles.logoWrapper}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSpacer} />
        <Text style={styles.heading}>Big Deals,{"\n"}Bigger Savings</Text>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => router.push("/(auth)/signup")}
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/(auth)/login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FC6066",
  },

  svgWrapper: {
    position: "absolute",
    top: 40,
    width: "100%",
  },

  logoWrapper: {
    position: "absolute",
    top: 100,
    width: "100%",
    alignItems: "center",
  },

  logo: {
    width: 120,
    height: 120,
  },

  content: {
    flex: 1,
    marginTop: 250,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,
  },
  headerSpacer: {
    height: 260,
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 28,
  },

  signupButton: {
    backgroundColor: "#B00000",
    width: "55%",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 14,
  },

  signupText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  loginButton: {
    backgroundColor: "#FFFFFF",
    width: "55%",
    paddingVertical: 16,
    borderRadius: 12,
  },

  loginText: {
    color: "#E50914",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
