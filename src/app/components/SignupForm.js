"use client";

import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import SignupFormBackground from "../../assets/signup-form-bg.png";

function SignupForm() {
  return (
    <Box
      backgroundImage={`url(${SignupFormBackground.src})`}
      color="white"
      textAlign="center"
      padding="60px 162.5px"
      height={547}
      display={"flex"}
      flexDir={"column"}
      alignContent={"space-around"}
      justifyContent={"center"}
    >
      <Text fontSize={40} fontWeight="bold">
        Get Your Own AI Twin For Free!
      </Text>
      <Text fontSize={24} mt={30} mb={30}>
        Try all premium features for two weeks, absolutely free. No credit card
        required.
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify="center"
      >
        <Input
          placeholder="First Name"
          variant="outline"
          bg="white"
          color="black"
          _placeholder={{ color: "gray.500" }}
        />
        <Input
          placeholder="Last Name"
          variant="outline"
          bg="white"
          color="black"
          _placeholder={{ color: "gray.500" }}
        />
        <Input
          placeholder="Email Address"
          type="email"
          variant="outline"
          bg="white"
          color="black"
          _placeholder={{ color: "gray.500" }}
        />
        <Button colorScheme="green" px={10}>
          Sign Up
        </Button>
      </Stack>
      <Box width={655} height={83} alignSelf={"center"}>
        <Text fontSize="sm" mt={12} mb={30}>
          After submission, you will receive an email with instructions on how
          to set up your AI twin, including how to provide detailed information
          for customization and how to prepare for your next event. By
          submitting this form, you confirm that you have read and agree to our{" "}
          <Link href="#" color="teal.300" isExternal>
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="#" color="teal.300" isExternal>
            Terms of Use
          </Link>
          .
        </Text>
      </Box>
    </Box>
  );
}

export default SignupForm;
