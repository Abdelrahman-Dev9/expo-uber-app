import OnBoardingScreen from "@/components/OnBoardingScreen";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const page = () => {
  return (
    <SafeAreaView>
      <OnBoardingScreen
        image={require("@/assets/images/onboarding2.png")}
        title={"The best car in your \n hands with "}
        subtitle="Ryde"
        description={
          "Discover the convenience of finding \n your perfect ride with our Ryde App"
        }
        nextRoute="/screenThree"
      />
    </SafeAreaView>
  );
};

export default page;
