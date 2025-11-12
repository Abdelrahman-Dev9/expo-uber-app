import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          height: 60,
          backgroundColor: "#333333",
          borderRadius: 50,
          bottom: 30,
          marginHorizontal: 10,
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: focused ? "#0CC25F" : "",
                padding: 5,
                borderRadius: 50, // makes it circular
              }}
            >
              <Image
                source={require("@/assets/icons/home.png")}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? "white" : "gray",
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: focused ? "#0CC25F" : "",
                padding: 5,
                borderRadius: 50, // makes it circular
              }}
            >
              <Image
                source={require("@/assets/icons/notification-status.png")}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? "white" : "gray",
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",

          tabBarIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: focused ? "#0CC25F" : "",
                padding: 5,
                borderRadius: 50, // makes it circular
              }}
            >
              <Image
                source={require("@/assets/icons/chat.png")}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? "white" : "gray",
                }}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: focused ? "#0CC25F" : "",
                padding: 5,
                borderRadius: 50, // makes it circular
              }}
            >
              <Image
                source={require("@/assets/icons/profile.png")}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? "white" : "gray",
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
