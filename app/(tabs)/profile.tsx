import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SignOutButton } from "../(auth)/SignOutButton";

const Profile = () => {
  return (
    <View className="flex-1 ">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="px-6 pb-6 pt-14">
        <Text className="text-3xl font-bold text-gray-900">Your profile</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Photo */}
        <View className="items-center mb-8">
          <View className="relative">
            <View className="items-center justify-center w-40 h-40 overflow-hidden bg-pink-300 rounded-full">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        {/* Form Fields */}
        <View className="p-4 px-6 bg-white rounded-[15px] mx-5">
          {/* First Name */}
          <View className="mb-6">
            <Text className="mb-2 text-sm text-gray-500">First name</Text>
            <View className="flex-row items-center justify-between px-4 py-4 rounded-full bg-gray-50">
              <Text className="text-lg font-medium text-gray-900">Marin</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Image source={require("@/assets/icons/Group.png")} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Last Name */}
          <View className="mb-6">
            <Text className="mb-2 text-sm text-gray-500">Last name</Text>
            <View className="flex-row items-center justify-between px-4 py-4 rounded-full bg-gray-50">
              <Text className="text-lg font-medium text-gray-900">
                JS Mastery
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Image source={require("@/assets/icons/Group.png")} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Email */}
          <View className="mb-6">
            <Text className="mb-2 text-sm text-gray-500">Email</Text>
            <View className="flex-row items-center justify-between px-4 py-4 rounded-full bg-gray-50">
              <Text className="text-lg font-medium text-gray-900">
                marin@jsmastery.pro
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Image source={require("@/assets/icons/Group.png")} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Email Status */}
          <View className="mb-6">
            <Text className="mb-2 text-sm text-gray-500">Email status</Text>
            <View className="flex-row items-center self-start px-4 py-1 border rounded-full bg-emerald-100 border-emerald-500">
              <Image
                source={require("@/assets/icons/check.png")}
                className="w-6 h-6"
                style={{ tintColor: "#000" }}
              />
              <Text className="ml-2 text-base font-medium text-emerald-700">
                Verified
              </Text>
            </View>
          </View>

          {/* Phone Number */}
          <View className="mb-8">
            <Text className="mb-2 text-sm text-gray-500">Phone number</Text>
            <View className="flex-row items-center justify-between px-4 py-4 rounded-full bg-gray-50">
              <Text className="text-lg font-medium text-gray-900">
                +5547824162
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Image source={require("@/assets/icons/Group.png")} />
              </TouchableOpacity>
            </View>
          </View>
          {/**lgo out btn */}
          <SignOutButton />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
