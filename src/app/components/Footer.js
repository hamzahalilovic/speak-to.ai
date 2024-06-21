"use-client";
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={{ base: "20px", md: "40px" }}
      flexDirection="column"
      bg={"#f6f6f6"}
      color="#834FB1"
    >
      <Text fontSize={{ base: 12, md: 14 }} textAlign="center">
        <b>Speak to AI</b> is powered by{" "}
        <ChakraLink
          textDecoration="underline"
          href="https://www.prifina.com"
          isExternal
        >
          Prifina Inc
        </ChakraLink>{" "}
        to create Personal AI Twins for anyone.
      </Text>
      <Text mt={2} fontSize={{ base: 11, md: 13 }} textAlign="center">
        &copy; {currentYear} All rights reserved
      </Text>
    </Box>
  );
};

export default Footer;
