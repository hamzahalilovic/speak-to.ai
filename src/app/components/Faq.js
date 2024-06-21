"use-client";
import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from "@chakra-ui/react";

const Faq = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
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
        alignItems="flex-start"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
      >
        <Box width={{ base: "100%", md: "50%" }}>
          <Accordion allowToggle allowMultiple>
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
              <AccordionPanel color={"#2a2a2a"} padding="20px 10px 20px 10px">
                Absolutely! Speak-to.ai is designed to complement any
                presentation, whether it&apos;s for academic lectures, business
                conferences, motivational speeches, or any other public speaking
                event. Our platform tailors your AI twin to suit the specific
                content and style of your presentation, ensuring a seamless
                integration.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem padding="14px 35px 14px 10px" border="none">
              <AccordionButton
                color={"#2a2a2a"}
                bg="#f6f6f6"
                _expanded={{ bg: "#d8aaf6", color: "#2a2a2a" }}
                _hover={{ bg: "#d8aaf6", color: "#2a2a2a" }}
              >
                <Text textAlign={"left"} fontSize={18} fontWeight={"bold"}>
                  ​How does speak-to.ai ensure privacy and data security?
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={"#2a2a2a"} padding="20px 10px 20px 10px">
                Absolutely! Speak-to.ai is designed to complement any
                presentation, whether it&apos;s for academic lectures, business
                conferences, motivational speeches, or any other public speaking
                event. Our platform tailors your AI twin to suit the specific
                content and style of your presentation, ensuring a seamless
                integration.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem padding="14px 35px 14px 10px" border="none">
              <AccordionButton
                color={"#2a2a2a"}
                bg="#f6f6f6"
                _expanded={{ bg: "#d8aaf6", color: "#2a2a2a" }}
                _hover={{ bg: "#d8aaf6", color: "#2a2a2a" }}
              >
                <Text textAlign={"left"} fontSize={18} fontWeight={"bold"}>
                  What languages does the AI support?
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={"#2a2a2a"} padding="20px 10px 20px 10px">
                Absolutely! Speak-to.ai is designed to complement any
                presentation, whether it&apos;s for academic lectures, business
                conferences, motivational speeches, or any other public speaking
                event. Our platform tailors your AI twin to suit the specific
                content and style of your presentation, ensuring a seamless
                integration.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem padding="14px 35px 14px 10px" border="none">
              <AccordionButton
                color={"#2a2a2a"}
                bg="#f6f6f6"
                _expanded={{ bg: "#d8aaf6", color: "#2a2a2a" }}
                _hover={{ bg: "#d8aaf6", color: "#2a2a2a" }}
              >
                <Text textAlign={"left"} fontSize={18} fontWeight={"bold"}>
                  Can I integrate multimedia content into my AI’s responses?
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={"#2a2a2a"} padding="20px 10px 20px 10px">
                Absolutely! Speak-to.ai is designed to complement any
                presentation, whether it&apos;s for academic lectures, business
                conferences, motivational speeches, or any other public speaking
                event. Our platform tailors your AI twin to suit the specific
                content and style of your presentation, ensuring a seamless
                integration.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box width={{ base: "100%", md: "50%" }}>
          <Accordion allowToggle allowMultiple>
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
              <AccordionPanel color={"#2a2a2a"} padding="20px 10px 20px 10px">
                Absolutely! Speak-to.ai is designed to complement any
                presentation, whether it&apos;s for academic lectures, business
                conferences, motivational speeches, or any other public speaking
                event. Our platform tailors your AI twin to suit the specific
                content and style of your presentation, ensuring a seamless
                integration.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem padding="14px 35px 14px 10px" border="none">
              <AccordionButton
                color={"#2a2a2a"}
                bg="#f6f6f6"
                _expanded={{ bg: "#d8aaf6", color: "#2a2a2a" }}
                _hover={{ bg: "#d8aaf6", color: "#2a2a2a" }}
              >
                <Text textAlign={"left"} fontSize={18} fontWeight={"bold"}>
                  Can I update my AI twin after it goes live?
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={"#2a2a2a"} padding="20px 10px 20px 10px">
                Absolutely! Speak-to.ai is designed to complement any
                presentation, whether it&apos;s for academic lectures, business
                conferences, motivational speeches, or any other public speaking
                event. Our platform tailors your AI twin to suit the specific
                content and style of your presentation, ensuring a seamless
                integration.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem padding="14px 35px 14px 10px" border="none">
              <AccordionButton
                color={"#2a2a2a"}
                bg="#f6f6f6"
                _expanded={{ bg: "#d8aaf6", color: "#2a2a2a" }}
                _hover={{ bg: "#d8aaf6", color: "#2a2a2a" }}
              >
                <Text textAlign={"left"} fontSize={18} fontWeight={"bold"}>
                  How are audience interactions with my AI twin reported?
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={"#2a2a2a"} padding="20px 10px 20px 10px">
                Absolutely! Speak-to.ai is designed to complement any
                presentation, whether it&apos;s for academic lectures, business
                conferences, motivational speeches, or any other public speaking
                event. Our platform tailors your AI twin to suit the specific
                content and style of your presentation, ensuring a seamless
                integration.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem padding="14px 35px 14px 10px" border="none">
              <AccordionButton
                color={"#2a2a2a"}
                bg="#f6f6f6"
                _expanded={{ bg: "#d8aaf6", color: "#2a2a2a" }}
                _hover={{ bg: "#d8aaf6", color: "#2a2a2a" }}
              >
                <Text textAlign={"left"} fontSize={18} fontWeight={"bold"}>
                  Is there a limit to the number of AI twins I can create?
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={"#2a2a2a"} padding="20px 10px 20px 10px">
                Absolutely! Speak-to.ai is designed to complement any
                presentation, whether it&apos;s for academic lectures, business
                conferences, motivational speeches, or any other public speaking
                event. Our platform tailors your AI twin to suit the specific
                content and style of your presentation, ensuring a seamless
                integration.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};

export default Faq;
