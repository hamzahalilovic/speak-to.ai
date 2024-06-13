import Image from "next/image";



import { AuthProvider } from "@/context/authContext";
import Main from "@/navigation/Main";

import { ChakraProvider } from "@chakra-ui/react";
import { ChakraBaseProvider, chakraCache } from "@chakra-ui/next-js";

export default function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </ChakraProvider>
  );
}
