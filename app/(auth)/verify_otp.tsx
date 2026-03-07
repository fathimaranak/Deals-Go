import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function VerifyOtp() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Red Section */}
      <View style={styles.topSection}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={22} color="#fff" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Title + Image */}
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.title}>Email</Text>
            <Text style={styles.title}>Verification</Text>
          </View>

          <Image
            source={require("../../assets/images/otp-vector.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.subtitle}>Enter the 6-digit Verification Code</Text>

        {/* OTP Boxes */}
        <View style={styles.otpRow}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <TextInput
              key={item}
              style={styles.otpBox}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>

        {/* Resend */}
        <View style={styles.resendRow}>
          <Text style={styles.resendText}>Didn’t get the email?</Text>
          <TouchableOpacity style={styles.resendButton}>
            <Ionicons name="refresh" size={14} color="#ff1b24" />
            <Text style={styles.resendLink}> Resend</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <TouchableOpacity>
            <Text style={styles.smsText}>Try OTP via SMS.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>

          <Text style={styles.policyText}>By continuing, you agree to our</Text>
          <Text style={styles.policyText}>Terms & Privacy Policy</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  topSection: {
    backgroundColor: "#E50914",
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 30,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    bottom: -25,
    marginLeft: -2,
  },

  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 1,
  },

  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 28,
  },

  image: {
    width: 140,
    height: 110,
    resizeMode: "contain",
    marginRight: -30,
    bottom: -36,
  },
  body: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 28,
  },

  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 25,
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  otpBox: {
    width: 42,
    height: 42,
    backgroundColor: "#fff",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
  },

  resendRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  resendText: {
    fontSize: 14,
    color: "#555",
  },

  resendButton: {
    flexDirection: "row",
    alignItems: "center",

    marginLeft: 6,
  },

  resendLink: {
    color: "#E50914",
    fontSize: 14,
    fontWeight: "bold",
  },

  bottomSection: {
    marginTop: "auto",
    marginBottom: 35,
    alignItems: "center",
  },

  smsText: {
    fontSize: 14,
    color: "#555",
    textDecorationLine: "underline",
    marginBottom: 20,
  },

  submitButton: {
    width: "100%",
    backgroundColor: "#E50914",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 18,
  },

  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  policyText: {
    fontSize: 12,
    color: "#666",
  },
});
