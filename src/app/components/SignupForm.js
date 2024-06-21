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
      padding={{ base: "40px 20px", md: "60px 162.5px" }}
      height={{ base: "auto", md: 547 }}
      display={"flex"}
      flexDir={"column"}
      alignContent={"space-around"}
      justifyContent={"center"}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Text fontSize={{ base: 32, md: 40 }} fontWeight="bold">
        Get Your Own AI Twin For Free!
      </Text>
      <Text fontSize={{ base: 20, md: 24 }} mt={5} mb={5}>
        Try all premium features for two weeks, absolutely free. No credit card
        required.
      </Text>
      <form
        className="launchlist-form"
        action="https://getlaunchlist.com/s/5lelnc"
        method="POST"
        style={{ width: "100%" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify="center"
          width="100%"
        >
          <Input
            name="name"
            placeholder="First Name"
            variant="outline"
            bg="white"
            color="black"
            _placeholder={{ color: "gray.500" }}
            width={{ base: "100%", md: "auto" }}
          />
          <Input
            name="lastname"
            placeholder="Last Name"
            variant="outline"
            bg="white"
            color="black"
            _placeholder={{ color: "gray.500" }}
            width={{ base: "100%", md: "auto" }}
          />
          <Input
            name="email"
            placeholder="Email Address"
            type="email"
            variant="outline"
            bg="white"
            color="black"
            _placeholder={{ color: "gray.500" }}
            width={{ base: "100%", md: "auto" }}
            required
          />
          <Button
            type="submit"
            colorScheme="green"
            px={10}
            width={{ base: "100%", md: "auto" }}
          >
            Join Waitlist
          </Button>
        </Stack>
      </form>
      <Box width={{ base: "100%", md: 655 }} height="auto" alignSelf={"center"}>
        <Text fontSize="sm" mt={8} mb={5}>
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
      {/* Add the script for tracking referrals */}
      <script src="https://getlaunchlist.com/js/widget-diy.js" defer></script>
    </Box>
  );
}

export default SignupForm;
