import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Signup() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#0D3559" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#FFF" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Create Your{"\n"}Account</Text>

        {/* Decorative shapes */}
      </View>

      {/* Form */}
      <ScrollView
        contentContainerStyle={styles.form}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter Your Name"
          placeholderTextColor="#999"
          style={styles.input}
        />

        {/* Mobile Number */}
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.phoneRow}>
          <TouchableOpacity style={styles.countryCode}>
            <Text style={styles.countryText}>+971</Text>
            <Ionicons name="chevron-down" size={16} color="#666" />
          </TouchableOpacity>

          <TextInput
            placeholder="Enter Phone Number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            style={styles.phoneInput}
          />
        </View>

        {/* Email */}
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Enter Your Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          style={styles.input}
        />

        {/* Gender */}
        <Text style={styles.label}>Gender</Text>
        <TouchableOpacity style={styles.selectInput}>
          <Text style={styles.selectText}>Select</Text>
          <Ionicons name="chevron-down" size={18} color="#666" />
        </TouchableOpacity>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          Already have an account?{" "}
          <Text
            style={styles.loginLink}
            onPress={() => router.push("/(auth)/login")}
          >
            Login
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  /* Header */
  header: {
    backgroundColor: "#235179",
    paddingTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 4,
  },

  headerTitle: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  /* Form */
  form: {
    padding: 32,
    paddingBottom: 40,
  },

  label: {
    fontSize: 14,
    color: "#777",
    marginBottom: 8,
    marginTop: 16,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 14,
    color: "black",
  },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  countryCode: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 10,
    marginRight: 10,
  },

  countryText: {
    fontSize: 14,
    marginRight: 4,
  },

  phoneInput: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: "black",
  },

  selectInput: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  selectText: {
    color: "#999",
    fontSize: 14,
  },

  button: {
    backgroundColor: "#E50914",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginTop: 200,
    marginBottom: 20,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  footer: {
    textAlign: "center",
    color: "#555",
    fontSize: 14,
    fontWeight: 600,
  },

  loginLink: {
    color: "#E50914",
    fontWeight: "600",
  },
});
