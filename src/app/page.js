"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";

import BannerBackground from "../assets/banner-background.png";

import BannerBackground2 from "../assets/banner-background-2.png";
import BannerImage from "../assets/ai-twin.png";
import BannerImage2 from "../assets/ai-twin-4.png";

import RealTime from "../assets/real-time.png";
import EasyContent from "../assets/easy-content.png";
import LangCustomization from "../assets/lang-customization.png";
import EngInsights from "../assets/eng-insights.png";

import PublicSpeakers from "../assets/public-speakers.png";
import SubjectExpert from "../assets/subject-expert.png";
import Leader from "../assets/leader.png";

import One from "../assets/1.png";
import Two from "../assets/2.png";
import Three from "../assets/3.png";

import AiPreview from "../assets/ai-preview.png";

import VideoFile from "../assets/speak-to-ai-video.mp4";

import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Text,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AspectRatio,
} from "@chakra-ui/react";
import SignupForm from "@/app/components/SignupForm";

import { Link as ChakraLink } from "@chakra-ui/react";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const Home = () => {
  const signupFormRef = useRef(null);

  const scrollToSignupForm = () => {
    signupFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const FeatureStep = ({ number, title, description, color, borderColor }) => (
    <Flex
      alignItems="flex-start"
      textAlign={{ base: "center", md: "left" }}
      padding="20px"
      flexDirection="column"
      width={{ base: "100%", md: "33%" }}
    >
      <Flex
        alignItems="baseline"
        justifyContent={{ base: "center", md: "flex-start" }}
        mb={30}
      >
        <Box
          minWidth="35px"
          minHeight="35px"
          borderRadius="50%"
          backgroundColor={color}
          borderWidth={1}
          borderColor={borderColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          fontWeight="bold"
          fontSize="18px"
          mr={{ base: "1px", md: "15px" }}
        >
          {number}
        </Box>
        <Text fontSize="32px" fontWeight="bold" color={color}>
          {title}
        </Text>
      </Flex>
      <Text fontSize="18px" color="#4e4e4e">
        {description}
      </Text>
    </Flex>
  );

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
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: 8, md: 0 }}
            maxWidth={{ base: "100%", md: "50%" }}
            paddingTop={{ base: "70px", md: "none" }}
            marginRight={{ base: "0px", md: "40px" }}
          >
            <Text
              fontSize={{ base: 32, md: 48 }}
              color="#F4F4F4"
              fontWeight="bold"
              letterSpacing={1}
              mb={{ base: 4, md: 6 }}
              whiteSpace="normal"
              maxWidth={421}
            >
              Elevate Your Expertise with AI
            </Text>
            <Text
              color="#F4F4F4"
              mb={{ base: 4, md: 6 }}
              px={{ base: 4, md: 0 }}
              whiteSpace="normal"
              maxWidth={527}
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
              onClick={scrollToSignupForm}
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

      <Box
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        padding={{ base: "40px 20px", md: "60px 162.5px" }}
        flexDirection="column"
      >
        <Text
          fontSize={{ base: 32, md: 40 }}
          color="#4b4b4b"
          fontWeight="bold"
          letterSpacing={1}
          mb={{ base: 4, md: 6 }}
          whiteSpace="normal"
          textAlign={"center"}
        >
          Features and Benefits
        </Text>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          padding={{ base: "20px 10px", md: "0px 0px" }}
        >
          {[
            {
              src: RealTime.src,
              title: "Real-Time Engagement",
              description:
                "Engage your audience with your own AI knowledge twin, answering questions and providing insights on the fly.",
              color: "#403fc2",
            },
            {
              src: EasyContent.src,
              title: "Easy Content Integration",
              description:
                "Effortlessly input your speech and create your knowledge base. Let the AI do the talking with context-aware responses.",
              color: "#AF2E5D",
            },
            {
              src: LangCustomization.src,
              title: "Language and Customization",
              description:
                "Communicate in any language. Customize your AI's tone, style, and complexity to match your unique voice.",
              color: "#3884C2",
            },
            {
              src: EngInsights.src,
              title: "Engagement Insights",
              description:
                "Engage your audience with your own AI knowledge twin, answering questions and providing insights on the fly.",
              color: "#A83FC2",
            },
          ].map((item, index) => (
            <Box
              key={index}
              justifyContent="space-between"
              alignItems="center"
              textAlign={{ base: "center", md: "center" }}
              maxWidth={{ base: "100%", md: "25%" }}
              flexDir="column"
              padding="30px 35px"
            >
              <Image
                src={item.src}
                alt="AI Twin"
                maxWidth={{ base: "50%", md: 127 }}
                mx="auto"
              />
              <Text
              mt={30}
                fontSize={{ base: 24 }}
                color={item.color}
                fontWeight="bold"
                letterSpacing={1}
                mb={{ base: 4, md: 6 }}
                whiteSpace="normal"
              >
                {item.title}
              </Text>
              <Text fontSize={16} color="#5d5e62">
                {item.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="gray.50"
        padding={{ base: "40px 20px", md: "60px 30px" }}
        flexDirection="column"
      >
        <Text
          fontSize={{ base: 32, md: 40 }}
          color="#4b4b4b"
          fontWeight="bold"
          letterSpacing={1}
          mb={{ base: 4, md: 6 }}
          whiteSpace="normal"
        >
          See it in Action!
        </Text>

        <Box maxW={642} maxH={391} backgroundColor="blue">
          <video width="100%" controls>
            <source src={VideoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>

        <Text margin={{ base: "20px 0px 40px 0px", md: "20px 0px 40px 0px" }}>
          Full presentation also{" "}
          <ChakraLink
            textDecoration="underline"
            href="https://youtu.be/6hlT5_xcTMc?si=D_Eff_qrKD528VTY&t=127"
            isExternal
          >
            available here
          </ChakraLink>
        </Text>

        <Image
          src={AiPreview.src}
          alt="AI Twin"
          maxWidth={{ base: "100%", md: 643 }}
        />
        <Button
          margin={{ base: "40px 0px 0px 0px", md: "45px 0px 0px 0px" }}
          backgroundColor="#8BBDEF"
          padding="14px 30px"
          fontSize={12}
          borderRadius={0}
          color="white"
          as="a"
          href="https://hey.speak-to.ai/valto"
        >
          TRY THIS AI
        </Button>
      </Box>
      <Box
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        padding={{ base: "40px 20px", md: "60px 162.5px" }}
        flexDirection="column"
      >
        <Text
          fontSize={{ base: 32, md: 40 }}
          color="#4b4b4b"
          fontWeight="bold"
          letterSpacing={1}
          mb={{ base: 4, md: 6 }}
          whiteSpace="normal"
          textAlign="center"
        >
          Who is it For?
        </Text>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          padding={{ base: "20px 10px", md: "0px 0px" }}
        >
          {[
            {
              src: PublicSpeakers.src,
              title: "Public Speakers",
              description:
                "Using Speak to AI on stage allows you to have real-time interaction and access to analytics with your audience while you are speaking.",
              color: "#AF2E5D",
            },
            {
              src: SubjectExpert.src,
              title: "Subject Matter Experts",
              description:
                "Engage your audience with an AI Twin that is tailored to provide answers based on your specific personal expertise.",
              color: "#3884C2",
            },
            {
              src: Leader.src,
              title: "Leaders with Engaged Audience",
              description:
                "Make yourself more accessible to your audience by providing an AI Twin with a personal knowledge base. Gain analytics and improve.",
              color: "#A83FC2",
            },
          ].map((item, index) => (
            <Box
              key={index}
              justifyContent="space-between"
              alignItems="center"
              textAlign={{ base: "center", md: "center" }}
              maxWidth={{ base: "100%", md: "33%" }}
              flexDir="column"
              padding="30px 35px"
            >
              <Image
                src={item.src}
                alt="AI Twin"
                maxWidth={{ base: "50%", md: 127 }}
                mx="auto"
              />
              <Text
              mt={30}
                fontSize={{ base: 24 }}
                color={item.color}
                fontWeight="bold"
                letterSpacing={1}
                mb={{ base: 4, md: 6 }}
                whiteSpace="normal"
              >
                {item.title}
              </Text>
              <Text fontSize={16} color="#5d5e62">
                {item.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
      <Box
        maxHeight={{ base: "auto", md: 563 }}
        backgroundImage={`url(${BannerBackground2.src})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        padding={{ base: "40px 20px", md: "60px 162.5px" }}
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
              ​Why speak-to.ai?
            </Text>
            <Text
              color="#F4F4F4"
              mb={{ base: 4, md: 6 }}
              px={{ base: 4, md: 0 }}
              whiteSpace="normal"
            >
              Your AI knowledge twin is designed for individuals to augment
              their expertise to an audience and boost engagement without the
              hassle of technical setup.
            </Text>
          </Box>
          <Image
            src={BannerImage2.src}
            alt="AI Twin"
            maxWidth={{ base: "100%", md: 421 }}
          />
        </Flex>
      </Box>
      <Box
        // h={{ base: "auto", md: 631 }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        padding={{ base: "40px 20px", md: "60px 162.5px" }}
        flexDirection={"column"}
      >
        <Text
          fontSize={{ base: 32, md: 40 }}
          color="#4b4b4b"
          fontWeight="bold"
          letterSpacing={1}
          mb={{ base: 4, md: 6 }}
          whiteSpace="normal"
        >
          How does it work?
        </Text>

        <Flex
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          padding={{ base: "20px 10px", md: "0px 0px" }}
        >
          <FeatureStep
            number="1"
            title="Sign Up & Quick Start"
            description="Create your account and first AI knowledge twin in a minutes."
            color="#403FC2"
            borderColor="#7076EE"
          />
          <FeatureStep
            number="2"
            title="Upload & Customize"
            description="Upload your knowledge content and personalize your AI."
            color="#AF2E5D"
            borderColor="#E56CA7"
          />
          <FeatureStep
            number="3"
            title="Engage & Analyze"
            description="Share your AI with your audience and get automated insights."
            color="#3884c2"
            borderColor="#7BBEED"
          />
        </Flex>
      </Box>
      <Faq />
      <Box ref={signupFormRef}>
        <SignupForm />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
