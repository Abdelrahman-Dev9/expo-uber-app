import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const [isVerified, setIsVerified] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in is complete, activate session and redirect
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/"); // 👈 change this to your main app route
      } else {
        Alert.alert("Check your email", "Verification may be required.");
      }
    } catch (err: any) {
      Alert.alert("Error", err.errors?.[0]?.message || "Invalid credentials");
    }
  };

  return (
    <View className="flex-1 bg-[#FFFFFF] relative">
      <Image
        source={require("@/assets/images/get-started.png")}
        className="w-full h-[266px]"
        resizeMode="cover"
      />
      <View className="absolute top-[210px] left-10 w-full">
        <Text className="text-[28px] font-semibold mb-6">Welcome 👋</Text>
      </View>

      <View className="px-10 mt-5 ">
        <Text className="mb-2 font-semibold text-[17px]">Email</Text>
        <View className="flex-row items-center border-white border-2 rounded-full p-5 bg-[#F6F8FA]">
          <Image
            source={require("@/assets/icons/email.png")}
            className="w-5 h-5 mr-3"
          />
          <TextInput
            value={emailAddress}
            onChangeText={setEmailAddress}
            placeholder="adrian@jsmastery.pr|"
          />
        </View>
      </View>
      <View className="px-10 mt-5 ">
        <Text className="mb-2 font-semibold text-[17px]">Password</Text>
        <View className="flex-row justify-between border-white border-2 rounded-full p-5 bg-[#F6F8FA]">
          <View className="flex-row">
            <Image
              source={require("@/assets/icons/lock.png")}
              className="w-5 h-5 mr-3"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="Enter password"
            />
          </View>
          <Image
            source={require("@/assets/icons/eyecross.png")}
            className="w-5 h-5 mr-3"
          />
        </View>
        <TouchableOpacity
          className="bg-[#0286FF] rounded-full items-center mt-10"
          onPress={handleSignIn}
        >
          <Text className="p-4 font-semibold text-white text-[17px]">
            Login
          </Text>
        </TouchableOpacity>
        <View className="flex-row items-center gap-2 m-8">
          <Text className="w-[45%] h-[2px] bg-[#CED1DD]" />
          <Text className="text-[15px] font-semibold">Or</Text>
          <Text className="w-[45%] h-[2px] bg-[#CED1DD]" />
        </View>
        <TouchableOpacity className="border-[#EBEBEB] border-2 rounded-full   p-4  flex-row justify-center gap-5">
          <Image
            source={require("@/assets/icons/google.png")}
            className="w-5 h-5"
          />
          <Text>Log In with Google</Text>
        </TouchableOpacity>
        <View className="flex-row items-center justify-center mt-10">
          <Text className="text-[17px]">Don’t have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/signUp")}>
            <Text className="text-[#0286FF] font-semibold text-[17px] ml-2">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Verification Modal - Shows/Hides based on isVerified state */}
      <Modal
        visible={isVerified}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsVerified(false)}
      >
        <View className="items-center justify-center flex-1 px-6 bg-black/50">
          <View className="items-center w-[355px] h-[442px] p-10 bg-white rounded-3xl gap-4">
            {/* Success Checkmark */}
            <Image
              source={require("@/assets/icons/check.png")}
              className="w-[100px] h-[100px] mb-3 bg-green-500 rounded-full p-2"
            />

            {/* Verified Text */}
            <Text className="mb-3 text-[28px] font-bold text-gray-900">
              Verified!
            </Text>

            {/* Description */}
            <Text className="mb-8 text-[17px] leading-6 text-center text-[#858585]">
              You have successfully verified{"\n"}your account.
            </Text>

            {/* Browse Home Button */}
            <TouchableOpacity
              className="bg-[#0286FF] w-full py-4 rounded-full items-center"
              onPress={() => {
                setIsVerified(false);
                router.replace("/(tabs)/home");
              }}
            >
              <Text className="text-[17px] font-semibold text-[#FFFFFF]">
                Browse Home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Login;
