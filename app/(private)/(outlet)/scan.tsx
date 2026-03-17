import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function ScanToRedeemScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF1222" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Scan to Redeem</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* QR Card */}
      <View style={styles.qrCard}>
        <QRCode
          value="M161229"
          size={160}
          color="#1B214A"
          backgroundColor="white"
        />

        <Text style={styles.codeText}>M 161 229</Text>

        <Text style={styles.timerLabel}>🕒 Time left to redeem:</Text>
        <Text style={styles.timer}>14:29</Text>
      </View>

      {/* Offer Card */}
      <View style={styles.offerWrapper}>
        <View style={styles.offerCard}>
          <Text style={styles.offerText}>
            Buy McVeggie or McChicken®{"\n"}Meal at QAR 50
          </Text>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            }}
            style={styles.burgerImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EC2028",
    alignItems: "center",
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 60,
  },

  closeText: {
    color: "white",
    fontSize: 16,
  },

  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },

  qrCard: {
    width: 360,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginTop: 70,
    alignItems: "center",
    paddingVertical: 30,
  },

  fakeQr: {
    width: 160,
    height: 160,
    backgroundColor: "black",
    marginBottom: 20,
  },

  codeText: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    marginTop: 10,
  },

  timerLabel: {
    fontSize: 14,
    color: "#272626",
    marginTop: 15,
    fontWeight: 600,
  },

  timer: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 5,
    color: "#241f1f",
  },

  offerWrapper: {
    width: 360,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "white",
    borderRadius: 12,
    marginTop: 25,
    padding: 5,
  },

  offerCard: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },

  offerText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
    width: 180,
  },

  burgerImage: {
    width: 85,
    height: 85,
    borderRadius: 8,
  },
});
