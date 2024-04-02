import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";
import { GlobalProvider } from "./src/hooks/GlobalState";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/components/Telas/Home";

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
     <SafeAreaProvider>
      <GlobalProvider>
        <Home />
      </GlobalProvider>
     </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
