import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!isLoaded) return;

    try {
      // Create the user
      await signUp.create({
        firstName: name,
        emailAddress,
        password,
      });

      // Send verification email
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      Alert.alert("Check your email", "We sent you a verification code.");
      router.push("/(auth)/verify-code");
    } catch (err: any) {
      Alert.alert("Error", err.errors?.[0]?.message || "Something went wrong");
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
        <Text className="text-[28px] font-semibold mb-6">
          Create Your Account
        </Text>
      </View>

      <View className="px-10 mt-5 ">
        <Text className="mb-2 font-semibold text-[18px]">Name</Text>
        <View className="flex-row items-center border-white border-2 rounded-full p-5 bg-[#F6F8FA]">
          <Image
            source={require("@/assets/icons/person.png")}
            className="w-5 h-5 mr-3"
          />
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter name"
          />
        </View>
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
          className="bg-[#0286FF] rounded-full items-center mt-10 "
          onPress={handleSignUp}
        >
          <Text className="p-4 font-semibold text-white text-[17px]">
            Sign Up
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
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text className="text-[#0286FF] font-semibold text-[17px] ml-2">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
