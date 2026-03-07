import { Ionicons } from "@expo/vector-icons";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import ChevronRightGray from "@/assets/images/profile/chevron-right-gray.svg";
import FavouritesIcon from "@/assets/images/profile/favourites-icon.svg";
import LanguageIcon from "@/assets/images/profile/language-icon.svg";
import PersonalInfoIcon from "@/assets/images/profile/personal-info-icon.svg";
import PreferencesIcon from "@/assets/images/profile/preferences-icon.svg";
import QuickMenuIcon from "@/assets/images/profile/quick-menu-icon.svg";
import RateAppIcon from "@/assets/images/profile/rate-app-icon.svg";
import RedeemedIcon from "@/assets/images/profile/redeemed-icon.svg";
import SettingsIcon from "@/assets/images/profile/settings-icon.svg";
import SupportIcon from "@/assets/images/profile/support-icon.svg";
import WalletIcon from "@/assets/images/profile/wallet-icon.svg";
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back" size={22} color="#444" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>My Profile</Text>

          <View style={{ width: 50 }} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require("@/assets/images/profile/profile-avatar.png")}
            style={styles.avatar}
          />

          <Text style={styles.name}>Sarah Johnson</Text>
          <Text style={styles.email}>sarah.johnson@email.com</Text>

          {/* Stats */}
          <View style={styles.statsBox}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Redemptions</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2</Text>
              <Text style={styles.statLabel}>Years</Text>
            </View>
          </View>
        </View>

        {/* Quick Menu */}
        <View style={styles.sectionRow}>
          <QuickMenuIcon width={18} height={18} />
          <Text style={styles.sectionTitle}> Quick Menu</Text>
        </View>

        <View style={styles.quickRow}>
          <TouchableOpacity style={[styles.quickCard, styles.walletCard]}>
            <WalletIcon width={28} height={28} />
            <Text style={styles.quickTextBlue}>Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.quickCard, styles.favCard]}>
            <FavouritesIcon width={28} height={28} />
            <Text style={styles.quickTextRed}>Favourites</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.quickCard, styles.redeemCard]}>
            <RedeemedIcon width={28} height={28} />
            <Text style={styles.quickTextOrange}>Redeemed</Text>
          </TouchableOpacity>
        </View>

        {/* Account Settings */}
        <View style={styles.sectionRow}>
          <SettingsIcon width={18} height={18} />
          <Text style={styles.sectionTitle}> Account Settings</Text>
        </View>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <PersonalInfoIcon width={22} height={22} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.menuTitle}>Personal Information</Text>
              <Text style={styles.menuSubtitle}>
                Edit your Name, Email, Mobile Number etc.
              </Text>
            </View>
          </View>

          <ChevronRightGray width={18} height={18} />
        </TouchableOpacity>

        {/* Preferences */}
        <View style={styles.sectionRow}>
          <PreferencesIcon width={18} height={18} />
          <Text style={styles.sectionTitle}> Preferences</Text>
        </View>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <LanguageIcon width={22} height={22} />
            <Text style={[styles.menuTitle, { marginLeft: 12 }]}>Language</Text>
          </View>

          <View style={styles.rightRow}>
            <Text style={styles.languageText}>English</Text>
            <ChevronRightGray width={18} height={18} />
          </View>
        </TouchableOpacity>

        {/* Support */}
        <View style={styles.sectionRow}>
          <SupportIcon width={18} height={18} />
          <Text style={styles.sectionTitle}> Support</Text>
        </View>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <RateAppIcon width={22} height={22} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.menuTitle}>Rate App</Text>
              <Text style={styles.menuSubtitle}>
                Tell us what you think and support our app with a rating.
              </Text>
            </View>
          </View>

          <ChevronRightGray width={18} height={18} />
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 24,
  },
  headerContainer: {
    backgroundColor: "#F4F4F4",
    marginHorizontal: -20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 50,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    bottom: -55,
    marginLeft: -2,
  },

  backText: {
    color: "#555",
    fontSize: 18,
    marginLeft: 1,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#3A3A3A",
    bottom: -55,
  },

  profileSection: {
    alignItems: "center",
    marginBottom: 24,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#3D3D3D",
    marginTop: 12,
  },

  email: {
    fontSize: 14,
    color: "#8A8A8A",
    marginTop: 4,
  },

  statsBox: {
    flexDirection: "row",
    backgroundColor: "#F4F4F4",
    borderRadius: 14,
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 28,
  },

  statItem: {
    alignItems: "center",
  },

  divider: {
    width: 1,
    backgroundColor: "#D4D4D4",
    marginHorizontal: 24,
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "500",
    color: "#444",
  },

  statLabel: {
    fontSize: 14,
    color: "#444",
  },

  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 15,
    color: "#444",
    fontWeight: "500",
  },

  quickRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  quickCard: {
    width: 116,
    height: 84,
    borderRadius: 14,
    padding: 12,
    justifyContent: "space-between",
  },

  walletCard: {
    borderWidth: 1,
    borderColor: "#5564ff",
    backgroundColor: "#eef0ff",
  },

  favCard: {
    borderWidth: 1,
    borderColor: "#ff4a4a",
    backgroundColor: "#ffeaea",
  },

  redeemCard: {
    borderWidth: 1,
    borderColor: "#f5a623",
    backgroundColor: "#fff3df",
  },

  quickTextBlue: {
    color: "#5564ff",
    fontWeight: "600",
  },

  quickTextRed: {
    color: "#ff4a4a",
    fontWeight: "600",
  },

  quickTextOrange: {
    color: "#f5a623",
    fontWeight: "600",
  },

  menuCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
    borderWidth: 1,
    borderColor: "#EAEAEA",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  menuSubtitle: {
    fontSize: 11,
    color: "#8C8C8C",
    marginTop: 4,
    width: 190,
    lineHeight: 16,
  },

  rightRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  languageText: {
    color: "#777",
    marginRight: 8,
  },

  logoutButton: {
    backgroundColor: "#ECECEC",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 18,
  },

  logoutText: {
    color: "#FF4B4B",
    fontSize: 17,
    fontWeight: "500",
  },
});
