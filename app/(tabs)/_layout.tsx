import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("@/assets/icons/profile.png")}
              tintColor={"gray"}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
