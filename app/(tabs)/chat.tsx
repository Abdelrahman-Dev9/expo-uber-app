import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <SafeAreaView className="flex-1 mx-4">
      {/* 🧭 Header Section */}
      <View className="flex-row justify-between mt-2 ">
        <Text className="font-bold text-[22px] text-[#333333]">Chat List</Text>
        <Image
          source={require("@/assets/icons/out.png")}
          className="w-8 h-8 p-1 bg-white rounded-full"
          resizeMode="contain"
        />
      </View>
      <View className="items-center justify-center flex-1">
        <Image
          source={require("@/assets/images/message.png")}
          className="w-[264px] h-[115px]"
        />
        <Text className="text-[28px] font-semibold mt-10">
          No Messages, yet.
        </Text>
        <Text className="text-[17px] mt-4 text-[#858585]">
          No messages in your inbox, yet!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

/**
 *
 */
