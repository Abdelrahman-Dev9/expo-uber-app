import { useClerk } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk();
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to your desired page
      Alert.alert("You are about to sign out");
      router.replace("/(auth)/login");
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <View className="items-center justify-center flex-1 bg-white">
      <TouchableOpacity
        onPress={handleSignOut}
        className="px-6 py-3 bg-red-500 rounded-full w-[50%] items-center justify-center"
      >
        <Text className="text-lg font-semibold text-white">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
