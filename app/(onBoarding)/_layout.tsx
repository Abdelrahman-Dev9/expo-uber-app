import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="screenOne" options={{ title: "hello" }} />
    </Stack>
  );
};

export default _layout;
