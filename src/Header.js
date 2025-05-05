// src/Header.jsx
import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith("/projects/")) {
    return null;
  }

  return (
    <Box
      as="nav"
      position="fixed"
      top="16px"
      left="0"
      right="0"
      mx="auto"
      width={{ base: "90%", md: "80%", lg: "60%" }}
      maxW="1200px"
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 4 }}
      bg="rgba(0,0,0,0.8)"
      border="1px solid rgba(255,255,255,0.18)"
      borderRadius="24px"
      backdropFilter="blur(10px) saturate(180%)"
      zIndex="10000"
    >
      <Flex
        as="ul"
        listStyleType="none"
        align="center"
        justify="center"
        wrap="wrap"
        gap={{ base: "16px", md: "54px" }}
      >
        <Box as="li">
          <Link
            href="#home"
            color="white"
            fontSize={{ base: "12px", md: "14px" }}
            fontWeight="400"
          >
            Home
          </Link>
        </Box>
        <Box as="li">
          <Link
            href="#projects"
            color="white"
            fontSize={{ base: "12px", md: "14px" }}
            fontWeight="400"
          >
            Projects
          </Link>
        </Box>
        <Box as="li">
          <Link
            href="#footer"
            color="white"
            fontSize={{ base: "12px", md: "14px" }}
            fontWeight="400"
          >
            Connect
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
