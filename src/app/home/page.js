"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";

import BannerBackground from "../../assets/banner-background.png";

import BannerBackground2 from "../../assets/banner-background-2.png";
import BannerImage from "../../assets/ai-twin.png";
import BannerImage2 from "../../assets/ai-twin-4.png";

import RealTime from "../../assets/real-time.png";
import EasyContent from "../../assets/easy-content.png";
import LangCustomization from "../../assets/lang-customization.png";
import EngInsights from "../../assets/eng-insights.png";

import PublicSpeakers from "../../assets/public-speakers.png";
import SubjectExpert from "../../assets/subject-expert.png";
import Leader from "../../assets/leader.png";

import One from "../../assets/1.png";
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";

import AiPreview from "../../assets/ai-preview.png";

import VideoFile from "../../assets/speak-to-ai-video.mp4"; // Adjust the path to your video file

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

const Home = () => {
  const currentYear = new Date().getFullYear();

  const signupFormRef = useRef(null);

  const scrollToSignupForm = () => {
    signupFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
            marginRight={40}
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
        // h={{ base: "auto", md: 631 }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        padding={{ base: "40px 20px", md: "60px 30px" }}
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
          Features and Benefits
        </Text>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          padding={{ base: "20px 10px", md: "0px 162.5px" }}
        >
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "center" }}
            maxWidth={{ base: "100%", md: "25%" }}
            flexDir={"column"}
            padding="30px 35px"
          >
            <Image
              src={RealTime.src}
              alt="AI Twin"
              maxWidth={{ base: "100%", md: 127 }}
              mx="auto"
            />
            <Text
              fontSize={{ base: 24 }}
              color="#403fc2"
              fontWeight="bold"
              letterSpacing={1}
              mb={{ base: 4, md: 6 }}
              whiteSpace="normal"
            >
              Real-Time Engagement
            </Text>
            <Text fontSize={16} color="#5d5e62">
              Engage your audience with your own AI knowledge twin, answering
              questions and providing insights on the fly.
            </Text>
          </Box>
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "center" }}
            maxWidth={{ base: "100%", md: "25%" }}
            flexDir={"column"}
            padding="30px 35px"
          >
            <Image
              src={EasyContent.src}
              alt="AI Twin"
              maxWidth={{ base: "100%", md: 127 }}
              mx="auto"
            />
            <Text
              fontSize={{ base: 24 }}
              color="#403fc2"
              fontWeight="bold"
              letterSpacing={1}
              mb={{ base: 4, md: 6 }}
              whiteSpace="normal"
            >
              Easy Content Integration
            </Text>
            <Text fontSize={16} color="#5d5e62">
              Effortlessly input your speech and create your knowledge base. Let
              the AI do the talking with context-aware responses.
            </Text>
          </Box>
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "center" }}
            maxWidth={{ base: "100%", md: "25%" }}
            flexDir={"column"}
            padding="30px 35px"
          >
            <Image
              src={LangCustomization.src}
              alt="AI Twin"
              maxWidth={{ base: "100%", md: 127 }}
              mx="auto"
            />
            <Text
              fontSize={{ base: 24 }}
              color="#403fc2"
              fontWeight="bold"
              letterSpacing={1}
              mb={{ base: 4, md: 6 }}
              whiteSpace="normal"
            >
              Language and Customization
            </Text>
            <Text fontSize={16} color="#5d5e62">
              Communicate in any language. Customize your AI&apos;s tone, style,
              and complexity to match your unique voice.
            </Text>
          </Box>
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "center" }}
            maxWidth={{ base: "100%", md: "25%" }}
            flexDir={"column"}
            padding="30px 35px"
          >
            <Image
              src={EngInsights.src}
              alt="AI Twin"
              maxWidth={{ base: "100%", md: 127 }}
              mx="auto"
            />
            <Text
              fontSize={{ base: 24 }}
              color="#403fc2"
              fontWeight="bold"
              letterSpacing={1}
              mb={{ base: 4, md: 6 }}
              whiteSpace="normal"
            >
              Engagement Insights
            </Text>
            <Text fontSize={16} color="#5d5e62">
              Engage your audience with your own AI knowledge twin, answering
              questions and providing insights on the fly.
            </Text>
          </Box>
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
        backgroundColor={"gray.50"}
        padding={{ base: "40px 20px", md: "60px 30px" }}
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
            textDecoration={"underline"}
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
          margin={{ base: "40px 0px 0px 0px", md: "45 0px 0px 0px" }}
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
        // h={{ base: "auto", md: 631 }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        padding={{ base: "40px 20px", md: "60px 30px" }}
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
          Who is it For?
        </Text>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          padding={{ base: "20px 10px", md: "0px 162.5px" }}
        >
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "center" }}
            maxWidth={{ base: "100%", md: "33%" }}
            flexDir={"column"}
            padding="30px 35px"
          >
            <Image
              src={PublicSpeakers.src}
              alt="AI Twin"
              maxWidth={{ base: "100%", md: 127 }}
              mx="auto"
            />
            <Text
              fontSize={{ base: 24 }}
              color="#403fc2"
              fontWeight="bold"
              letterSpacing={1}
              mb={{ base: 4, md: 6 }}
              whiteSpace="normal"
            >
              Public Speakers
            </Text>
            <Text fontSize={16} color="#5d5e62">
              Using Speak to AI on stage allows you to have real-time
              interaction and access to analytics with your audience while you
              are speaking.
            </Text>
          </Box>
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "center" }}
            maxWidth={{ base: "100%", md: "33%" }}
            flexDir={"column"}
            padding="30px 35px"
          >
            <Image
              src={SubjectExpert.src}
              alt="AI Twin"
              maxWidth={{ base: "100%", md: 127 }}
              mx="auto"
            />
            <Text
              fontSize={{ base: 24 }}
              color="#403fc2"
              fontWeight="bold"
              letterSpacing={1}
              mb={{ base: 4, md: 6 }}
              whiteSpace="normal"
            >
              Subject Matter Experts
            </Text>
            <Text fontSize={16} color="#5d5e62">
              Engage your audience with an AI Twin that is tailored to provide
              answers based on your specific personal expertise.
            </Text>
          </Box>
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "center" }}
            maxWidth={{ base: "100%", md: "33%" }}
            flexDir={"column"}
            padding="30px 35px"
          >
            <Image
              src={Leader.src}
              alt="AI Twin"
              maxWidth={{ base: "100%", md: 127 }}
              mx="auto"
            />
            <Text
              fontSize={{ base: 24 }}
              color="#403fc2"
              fontWeight="bold"
              letterSpacing={1}
              mb={{ base: 4, md: 6 }}
              whiteSpace="normal"
            >
              Leaders with Engaged Audience
            </Text>
            <Text fontSize={16} color="#5d5e62">
              Make yourself more accessible to your audience by providing an AI
              Twin with a personal knowledge base. Gain analytics and improve.
            </Text>
          </Box>
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
        padding={{ base: "40px 20px", md: "60px 30px" }}
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
          display={"flex"}
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          padding={{ base: "20px 10px", md: "0px 162.5px" }}
        >
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "center" }}
            maxWidth={{ base: "100%", md: "33%" }}
            flexDir={"column"}
            padding="20px"
          >
            <Flex w="100%" flexDir={"row"} display={"flex"}>
              <Box width={"47px"} marginTop={1.3}>
                <Image src={One.src} alt="AI Twin" />
              </Box>
              <Text
                fontSize={{ base: 32 }}
                color="#403fc2"
                fontWeight="bold"
                letterSpacing={1}
                mb={{ base: 4, md: 6 }}
                whiteSpace="normal"
              >
                Sign Up & Quick Start
              </Text>
            </Flex>

            <Text fontSize={18} color="#5d5e62">
              Create your account and first AI knowledge twin in a minutes.
            </Text>
          </Box>
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "center" }}
            maxWidth={{ base: "100%", md: "33%" }}
            flexDir={"column"}
            padding="20px"
          >
            <Flex w="100%" flexDir={"row"} display={"flex"}>
              <Box width={"47px"} marginTop={1.3}>
                <Image src={Two.src} alt="AI Twin" />
              </Box>
              <Text
                fontSize={{ base: 32 }}
                color="#af2e5d"
                fontWeight="bold"
                letterSpacing={1}
                mb={{ base: 4, md: 6 }}
                whiteSpace="normal"
              >
                Upload & Customize
              </Text>
            </Flex>

            <Text fontSize={18} color="#5d5e62">
              Upload your knowledge content and personalize your AI.
            </Text>
          </Box>
          <Box
            justifyContent="space-between"
            alignItems="center"
            textAlign={{ base: "center", md: "center" }}
            maxWidth={{ base: "100%", md: "33%" }}
            flexDir={"column"}
            padding="20px"
          >
            <Flex w="100%" flexDir={"row"} display={"flex"}>
              <Box width={"47px"} marginTop={1.3}>
                <Image src={Three.src} alt="AI Twin" />
              </Box>
              <Text
                fontSize={{ base: 32 }}
                color="#3884c2"
                fontWeight="bold"
                letterSpacing={1}
                mb={{ base: 4, md: 6 }}
                whiteSpace="normal"
              >
                Engage & Analyze
              </Text>
            </Flex>

            <Text fontSize={18} color="#5d5e62">
              Share your AI with your audience and get automated insights.
            </Text>
          </Box>
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
        padding={{ base: "40px 20px", md: "60px 30px" }}
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
          FAQs
        </Text>
        <Flex
          width={"100%"}
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          padding={{ base: "20px 10px", md: "0px 162.5px" }}
        >
          <Box width={"50%"}>
            <Accordion>
              <AccordionItem padding="14px 35px 14px 10px" border="none">
                <AccordionButton
                  color={"#2a2a2a"}
                  bg="#f6f6f6"
                  _expanded={{ bg: "#d8aaf6", color: "#2a2a2a" }}
                  _hover={{ bg: "#d8aaf6", color: "#2a2a2a" }}
                >
                  <Text textAlign={"left"} fontSize={18} fontWeight={"bold"}>
                    Can I use speak-to.ai with any type of presentation?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  color={"#2a2a2a"}
                  padding="20px 10px 20px 10px"
                >
                  Absolutely! Speak-to.ai is designed to complement any
                  presentation, whether it&apos;s for academic lectures,
                  business conferences, motivational speeches, or any other
                  public speaking event. Our platform tailors your AI twin to
                  suit the specific content and style of your presentation,
                  ensuring a seamless integration.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding="14px 35px 14px 10px" border="none">
                <AccordionButton
                  color={"#2a2a2a"}
                  bg="#f6f6f6"
                  _expanded={{ bg: "#d8aaf6", color: "white" }}
                  fontSize={18}
                >
                  <Box as="span" flex="1" textAlign="left">
                    ​How does speak-to.ai ensure privacy and data security?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Absolutely! Speak-to.ai is designed to complement any
                  presentation, whether it&apos;s for academic lectures,
                  business conferences, motivational speeches, or any other
                  public speaking event. Our platform tailors your AI twin to
                  suit the specific content and style of your presentation,
                  ensuring a seamless integration.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding="14px 35px 14px 10px" border="none">
                <AccordionButton
                  color={"#2a2a2a"}
                  bg="#f6f6f6"
                  _expanded={{ bg: "#d8aaf6", color: "white" }}
                  fontSize={18}
                >
                  <Box as="span" flex="1" textAlign="left">
                    What languages does the AI support?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Absolutely! Speak-to.ai is designed to complement any
                  presentation, whether it&apos;s for academic lectures,
                  business conferences, motivational speeches, or any other
                  public speaking event. Our platform tailors your AI twin to
                  suit the specific content and style of your presentation,
                  ensuring a seamless integration.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding="14px 35px 14px 10px" border="none">
                <AccordionButton
                  color={"#2a2a2a"}
                  bg="#f6f6f6"
                  _expanded={{ bg: "#d8aaf6", color: "white" }}
                  fontSize={18}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Can I integrate multimedia content into my AI’s responses?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Absolutely! Speak-to.ai is designed to complement any
                  presentation, whether it&apos;s for academic lectures,
                  business conferences, motivational speeches, or any other
                  public speaking event. Our platform tailors your AI twin to
                  suit the specific content and style of your presentation,
                  ensuring a seamless integration.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box width={"50%"}>
            <Accordion>
              <AccordionItem padding="14px 35px 14px 10px" border="none">
                <AccordionButton
                  color={"#2a2a2a"}
                  bg="#f6f6f6"
                  _expanded={{ bg: "#d8aaf6", color: "#2a2a2a" }}
                  _hover={{ bg: "#d8aaf6", color: "#2a2a2a" }}
                >
                  <Text textAlign={"left"} fontSize={18} fontWeight={"bold"}>
                    What happens after the free trial period ends?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  color={"#2a2a2a"}
                  padding="20px 10px 20px 10px"
                >
                  Absolutely! Speak-to.ai is designed to complement any
                  presentation, whether it&apos;s for academic lectures,
                  business conferences, motivational speeches, or any other
                  public speaking event. Our platform tailors your AI twin to
                  suit the specific content and style of your presentation,
                  ensuring a seamless integration.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding="14px 35px 14px 10px" border="none">
                <AccordionButton
                  color={"#2a2a2a"}
                  bg="#f6f6f6"
                  _expanded={{ bg: "#d8aaf6", color: "white" }}
                  fontSize={18}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Can I update my AI twin after it goes live?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Absolutely! Speak-to.ai is designed to complement any
                  presentation, whether it&apos;s for academic lectures,
                  business conferences, motivational speeches, or any other
                  public speaking event. Our platform tailors your AI twin to
                  suit the specific content and style of your presentation,
                  ensuring a seamless integration.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding="14px 35px 14px 10px" border="none">
                <AccordionButton
                  color={"#2a2a2a"}
                  bg="#f6f6f6"
                  _expanded={{ bg: "#d8aaf6", color: "white" }}
                  fontSize={18}
                >
                  <Box as="span" flex="1" textAlign="left">
                    How are audience interactions with my AI twin reported?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Absolutely! Speak-to.ai is designed to complement any
                  presentation, whether it&apos;s for academic lectures,
                  business conferences, motivational speeches, or any other
                  public speaking event. Our platform tailors your AI twin to
                  suit the specific content and style of your presentation,
                  ensuring a seamless integration.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding="14px 35px 14px 10px" border="none">
                <AccordionButton
                  color={"#2a2a2a"}
                  bg="#f6f6f6"
                  _expanded={{ bg: "#d8aaf6", color: "white" }}
                  fontSize={18}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Is there a limit to the number of AI twins I can create?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Absolutely! Speak-to.ai is designed to complement any
                  presentation, whether it&apos;s for academic lectures,
                  business conferences, motivational speeches, or any other
                  public speaking event. Our platform tailors your AI twin to
                  suit the specific content and style of your presentation,
                  ensuring a seamless integration.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Box>
      <Box ref={signupFormRef}>
        <SignupForm />
      </Box>
      <Box
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={{ base: "40px 20px", md: "60px 40px" }}
        flexDirection={"column"}
      >
        <Text color="#834FB1" fontSize={14}>
          <b>Speak to AI</b> is powered by{" "}
          <ChakraLink
            textDecoration={"underline"}
            href="https://www.prifina.com"
            isExternal
          >
            Prifina Inc
          </ChakraLink>{" "}
          to create Personal AI Twins for anyone.
        </Text>
        <Text mt={2} fontSize={13} color="#3f3f3f">
          &copy; {currentYear} All rights reserved
        </Text>
      </Box>
    </div>
  );
};

export default Home;
