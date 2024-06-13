"use-client";
import {
  Box,
  Flex,
  Link,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box
      bg={bgColor}
      color={color}
      px={4}
      boxShadow="md"
      position="fixed"
      width="100%"
      zIndex="12"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <NextLink href="/" passHref>
            <Link fontSize="lg" fontWeight="bold">
              SPEAK TO AI
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
