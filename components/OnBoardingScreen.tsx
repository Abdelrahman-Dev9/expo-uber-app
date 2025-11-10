import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  image: ImageSourcePropType;
  title: string;
  subtitle?: string;
  description: string;
  nextRoute?: string;
}
const OnBoardingScreen = ({
  image,
  title,
  subtitle,
  description,
  nextRoute,
}: Props) => {
  const router = useRouter();
  return (
    <View className="mt-5 ">
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text className="absolute font-semibold right-5 text-[14px]">Skip</Text>
      </TouchableOpacity>
      <Image
        source={image}
        className="w-[420px] h-[350px] mt-[60px]"
        resizeMode="contain"
      />
      <View className="mt-10 ">
        <Text className="text-center text-[28px] font-semibold ">
          {title}
          <Text className="text-[#0286FF]"> {subtitle}</Text>
        </Text>
        <Text className="mt-4 text-center text-[#858585] text-[17px] font-semibold">
          {description}
        </Text>
      </View>

      <View className="flex-row justify-center gap-2 mt-10">
        <Text className="h-[4px] w-[40px] my-5 bg-[#2F74FA] rounded-full" />
        <Text className="h-[4px] w-[40px] my-5 bg-[#E2E8F0] rounded-full" />
        <Text className="h-[4px] w-[40px] my-5 bg-[#E2E8F0] rounded-full" />
      </View>
      <TouchableOpacity
        className="p-4 rounded-full bg-[#0286FF] items-center mx-10 mt-10"
        onPress={() => {
          if (nextRoute) {
            router.push(nextRoute as any);
          } else {
            router.push("/");
          }
        }}
      >
        <Text className="text-white font-bold text=[20px]">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoardingScreen;
