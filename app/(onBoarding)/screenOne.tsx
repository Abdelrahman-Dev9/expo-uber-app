import OnBoardingScreen from "@/components/OnBoardingScreen";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignOutButton } from "../(auth)/SignOutButton";

const ScreenOne = () => {
  return (
    <SafeAreaView>
      <OnBoardingScreen
        image={require("@/assets/images/onboarding1.png")}
        title={"The best car in your \n hands with "}
        subtitle="Ryde"
        description={
          "Discover the convenience of finding \n your perfect ride with our Ryde App"
        }
        nextRoute="/screenTwo"
        id={1}
      />
      <SignOutButton />
    </SafeAreaView>
  );
};

export default ScreenOne;
