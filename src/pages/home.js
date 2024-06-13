"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";

import BannerBackground from "../assets/banner-background.png";
import BannerImage from "../assets/ai-twin.png";
import {
  Box,
  Flex,
  Link,
  Button,
  useColorMode,
  useColorModeValue,
  Text,
  Image,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Box
        h={{ base: "auto", md: 631 }}
        backgroundImage={`url(${BannerBackground.src})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        padding={{ base: "40px 20px", md: "60px 30px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            h="100%"
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: 8, md: 0 }}
            maxWidth={{ base: "100%", md: "50%" }}
          >
            <Text
              fontSize={{ base: 32, md: 48 }}
              color="#F4F4F4"
              fontWeight="bold"
              letterSpacing={1}
              mb={{ base: 4, md: 6 }}
              whiteSpace="normal"
            >
              Elevate Your Expertise with AI
            </Text>
            <Text
              color="#F4F4F4"
              mb={{ base: 4, md: 6 }}
              px={{ base: 4, md: 0 }}
              whiteSpace="normal"
            >
              Create your own AI knowledge twin that interacts, engages and
              learns from your audience in real-time.
            </Text>
            <Button
              backgroundColor="#8BBDEF"
              padding="14px 30px"
              fontSize={12}
              borderRadius={0}
              color="white"
            >
              GET STARTED FOR FREE
            </Button>
          </Box>
          <Image
            src={BannerImage.src}
            alt="AI Twin"
            maxWidth={{ base: "100%", md: 421 }}
          />
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
