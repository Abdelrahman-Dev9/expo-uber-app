import React from "react";
import { Image, Text, View } from "react-native";

const RecentRide = () => {
  return (
    <View>
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
    </View>
  );
};

export default RecentRide;
