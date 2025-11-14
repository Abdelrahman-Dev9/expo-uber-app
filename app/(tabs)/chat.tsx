import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <SafeAreaView className="items-center justify-center flex-1">
      <View>
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
