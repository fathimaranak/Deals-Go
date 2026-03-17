import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Tester() {
  return (
    <View style={{ marginTop: 50 }}>
      <Button title="Login" onPress={() => router.push("/(auth)/login")} />
      <Button title="Signup" onPress={() => router.push("/(auth)/signup")} />
      <Button title="Welcome" onPress={() => router.push("/(auth)/welcome")} />
      <Button
        title="select-country"
        onPress={() => router.push("/(auth)/select-country")}
      />
      <Button
        title="Verify_otp"
        onPress={() => router.push("/(auth)/verify_otp")}
      />
      <Button
        title="Location"
        onPress={() => router.push("/(auth)/location")}
      />

      <Button
        title="Scan"
        onPress={() => router.push("/(private)/(outlet)/scan")}
      />
      <Button
        title="home"
        onPress={() => router.push("/(private)/(home)/home")}
      />
      <Button
        title="coupon"
        onPress={() => router.push("/(private)/my-coupons")}
      />
    </View>
  );
}
