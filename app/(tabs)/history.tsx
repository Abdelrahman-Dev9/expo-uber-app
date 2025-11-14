import RecentRide from "@/components/RecentRide";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const History = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecentRide />
        <RecentRide />
        <RecentRide />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
