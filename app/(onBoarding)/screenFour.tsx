import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const page = () => {
  return (
    <View className="flex-1 bg-[#FFFFFF]">
      <Image
        source={require("@/assets/images/get-started.png")}
        className="w-full h-[466px]"
        resizeMode="cover"
      />

      <View className="items-center mt-10 font-semibold">
        <Text className="text-[28px]">Let’s get started</Text>
        <Text className="text-[17px] text-[#858585] mt-5 text-center">
          Sign up or log in to find out the best {"\n"} car for you
        </Text>
        <TouchableOpacity className="bg-[#0286FF] rounded-full items-center mt-10 w-[90%] ">
          <Text className="p-4 font-semibold text-white text-[17px]">
            Sign Up
          </Text>
        </TouchableOpacity>
        <View className="flex-row items-center gap-2 m-8">
          <Text className="w-[45%] h-[2px] bg-[#CED1DD]" />
          <Text className="text-[15px] font-semibold">Or</Text>
          <Text className="w-[45%] h-[2px] bg-[#CED1DD]" />
        </View>
        <TouchableOpacity className="border-[#EBEBEB] border-2 rounded-full   p-4 w-[90%] flex-row justify-center gap-5">
          <Image
            source={require("@/assets/icons/google.png")}
            className="w-5 h-5"
          />
          <Text>Log In with Google</Text>
        </TouchableOpacity>
        <Text className="mt-10 text-[17px]">
          Don’t have an account?
          <Text className="text-[#0286FF] font-semibold"> Log in</Text>
        </Text>
      </View>
    </View>
  );
};

export default page;
