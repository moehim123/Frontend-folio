import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="nav"
      borderRadius="24px"
      border="1px solid rgba(255, 255, 255, 0.18)"
      bg="#000"
      backdropFilter="blur(10px) saturate(180%)"
      width={{ base: "90%", md: "60%", lg: "20%" }}
      padding="6px 24px"
      zIndex="10000"
      margin="0 auto"
      position="fixed"
      top="2"
      left="50%"
      transform="translateX(-50%)"
    >
      <Flex as="ul" listStyleType="none" align="center" gap="54px" justify="center">
        <Box as="li">
          <Link href="#home" color="#fff" fontSize="14px" fontWeight="400">
            Home
          </Link>
        </Box>
        <Box as="li">
          <Link href="#projects" color="#fff" fontSize="14px" fontWeight="400">
            Projects
          </Link>
        </Box>
        <Box as="li">
          <Link href="#footer" color="#fff" fontSize="14px" fontWeight="400">
            Connect
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
