import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Speak to AI - Your Digital AI Twin",
  description: "Speak to AI - Your Digital AI Twin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://getlaunchlist.com/js/widget-diy.js" defer></script>

      <body className={inter.className}>
        <ChakraProvider>
          <AuthProvider>{children}</AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
