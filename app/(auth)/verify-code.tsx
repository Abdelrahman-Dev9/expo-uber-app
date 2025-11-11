import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function VerifyCodeScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleVerify = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
      router.replace("/"); // Go to your main app
    } catch (err: any) {
      Alert.alert("Error", err.errors?.[0]?.message || "Verification failed");
    }
  };

  return (
    <View className="justify-center flex-1 px-10 bg-white">
      <Text className="mb-6 text-2xl font-bold">Verify your email</Text>
      <TextInput
        placeholder="Enter verification code"
        value={code}
        onChangeText={setCode}
        className="p-4 bg-[#F6F8FA] rounded-full mb-4"
      />
      <TouchableOpacity
        className="bg-[#0286FF] rounded-full items-center"
        onPress={handleVerify}
      >
        <Text className="p-4 font-semibold text-white text-[17px]">Verify</Text>
      </TouchableOpacity>
    </View>
  );
}
