import { Tabs } from "expo-router";

import CategoriesIcon from "@/assets/images/tab-icons/categories.svg";
import HomeIcon from "@/assets/images/tab-icons/home.svg";
import LocationIcon from "@/assets/images/tab-icons/location.svg";
import LovedIcon from "@/assets/images/tab-icons/loved.svg";

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          height: 78,
          paddingTop: 8,
          paddingBottom: 10,
          borderTopWidth: 0,
          backgroundColor: "#fff",
        },

        tabBarActiveTintColor: "#ff4d4f",
        tabBarInactiveTintColor: "#666",

        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "500",
          marginTop: 4,
        },

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={22}
              height={22}
              color={focused ? "#ff4d4f" : "#666"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ focused }) => (
            <CategoriesIcon
              width={22}
              height={22}
              color={focused ? "#ff4d4f" : "#666"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="location"
        options={{
          title: "Location",
          tabBarIcon: ({ focused }) => (
            <LocationIcon
              width={22}
              height={22}
              color={focused ? "#ff4d4f" : "#666"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="loved"
        options={{
          title: "Loved",
          tabBarIcon: ({ focused }) => (
            <LovedIcon
              width={22}
              height={22}
              color={focused ? "#ff4d4f" : "#666"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
