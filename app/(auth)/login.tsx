import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/backgrounds/login-bg.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style="dark" backgroundColor="#FFFFFF" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Enter your mobile number{"\n"}to continue
        </Text>

        {/* Phone Input */}
        <View style={styles.phoneRow}>
          <TouchableOpacity
            style={styles.countryCode}
            onPress={() => router.push("/(auth)/select-country")}
          >
            <Text style={styles.countryText}>+971</Text>
          </TouchableOpacity>

          <TextInput
            placeholder="Enter Phone Number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            style={styles.phoneInput}
          />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          By continuing, you agree to our{"\n"}
          Terms & Privacy Policy
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  header: {
    marginTop: 40,
    marginBottom: 30,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    fontSize: 18,
    marginLeft: 4,
    color: "#000",
  },

  logo: {
    width: 130,
    height: 130,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 70,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    marginTop: 40,
  },

  subtitle: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginBottom: 27,
  },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  countryCode: {
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 10,
    marginRight: 10,
  },

  countryText: {
    fontSize: 14,
  },

  phoneInput: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 10,
    fontSize: 14,
    color: "black",
  },

  button: {
    backgroundColor: "#E50914",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 24,
    marginTop: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  footer: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
    lineHeight: 18,
  },
});
