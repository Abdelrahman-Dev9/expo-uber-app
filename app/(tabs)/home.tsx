import { useUser } from "@clerk/clerk-expo";
import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  // 🟢 Check if user data is loaded
  if (!isLoaded) return <Text>Loading…</Text>;

  // 🔴 Check if user is signed in
  if (!isSignedIn || !user) return <Text>Not signed in</Text>;

  // 🟢 Get full name from Clerk user object
  const fullName =
    user.fullName ?? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();

  return (
    <SafeAreaView className="flex-1 mx-4">
      {/* 🧭 Header Section */}
      <View className="flex-row items-center justify-between mt-2">
        <Text className="font-bold text-[22px] text-[#333333]">
          Welcome {fullName}
        </Text>
        <Image
          source={require("@/assets/icons/out.png")}
          className="w-8 h-8 p-1 bg-white rounded-full"
          resizeMode="contain"
        />
      </View>

      {/* 🔍 Search Bar */}
      <View className="flex-row items-center p-4 mt-4 bg-white rounded-full">
        <Image
          source={require("@/assets/icons/search.png")}
          className="w-5 h-5 mr-2"
          resizeMode="contain"
        />
        <TextInput
          placeholder="Where do you want to go?"
          className="flex-1 text-[15px]"
        />
      </View>

      {/* 📍 Current Location */}
      <View className="mt-5">
        <Text className="text-[24px] font-bold">Your current location</Text>
        <View className="w-full h-[280px] bg-gray-200 mt-4 rounded-[16px]" />
      </View>

      {/* 🚗 Recent Rides */}
      <Text className="text-[20px] font-bold mt-5">Recent Rides</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-1">
          <View className="w-full bg-white mt-4 rounded-[16px] p-4">
            {/* 🗺️ Ride Info */}
            <View className="flex-row gap-6 mt-2">
              <Image
                source={require("@/assets/icons/MapRide.png")}
                className="w-[80px] h-[90px]"
                resizeMode="contain"
              />
              <View className="gap-6">
                {/* 📍 From Location */}
                <View className="flex-row items-center gap-2">
                  <Image
                    source={require("@/assets/icons/direct-right.png")}
                    className="w-[20px] h-[20px]"
                    resizeMode="contain"
                  />
                  <Text className="text-[13px] text-[#333333]">
                    1901 Thornridge Cir. Shiloh
                  </Text>
                </View>
                {/* 📍 To Location */}
                <View className="flex-row items-center gap-2">
                  <Image
                    source={require("@/assets/icons/pin.png")}
                    className="w-[20px] h-[20px]"
                    resizeMode="contain"
                  />
                  <Text className="text-[13px] text-[#333333]">
                    2715 Ash Dr. San Jose
                  </Text>
                </View>
              </View>
            </View>

            {/* 📄 Ride Details */}
            <View className="w-full bg-[#F6F8FA] mt-4 p-4 rounded-[15px] gap-3">
              {/* Date & Time */}
              <View className="flex-row justify-between pb-2 border-b border-white">
                <Text className="text-[#858585]">Date & Time</Text>
                <Text className="text-[15px] text-[#333333] font-semibold">
                  16 July 2023, 10:30 PM
                </Text>
              </View>

              {/* Driver */}
              <View className="flex-row justify-between pb-2 border-b border-white">
                <Text className="text-[#858585]">Driver</Text>
                <Text className="text-[15px] text-[#333333] font-semibold">
                  Jane Cooper
                </Text>
              </View>

              {/* Car Seats */}
              <View className="flex-row justify-between pb-2 border-b border-white">
                <Text className="text-[#858585]">Car Seats</Text>
                <Text className="text-[15px] text-[#333333] font-semibold">
                  4
                </Text>
              </View>

              {/* Payment Status */}
              <View className="flex-row justify-between pb-2">
                <Text className="text-[#858585]">Payment Status</Text>
                <Text className="text-[15px] text-[#0CC25F] font-semibold">
                  Paid
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
