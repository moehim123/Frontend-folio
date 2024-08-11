import React from "react";
import { Box, HStack, Text, Image, Flex, Button } from "@chakra-ui/react";
import githubFooterImage from "./Images/GithubFooter.svg";
import linkedInFooter from "./Images/LnkedInFooter.svg";

const Footer = () => {
    return (
        <Box id = "footer" bg="#000" marginTop="54px">
            <HStack
                width={{ base: "90%", md: "80%", lg: "70%" }}
                margin="0 auto"
                marginTop="124px"
                padding="24px"
                position="relative"
                justifyContent="space-between"
            >
                <Text color="#fff" fontSize="14px" fontWeight="600">Connect with me</Text>
                <Flex gap="4px">
                    <Button
                        as="a"
                        href="https://www.linkedin.com/in/mohamed-himmat-a91951209"
                        target="_blank"
                        rel="noopener noreferrer"
                        bg="transparent"
                        _hover={{ bg: "transparent" }}
                        _focus={{ boxShadow: "none" }}
                        _active={{ bg: "transparent" }}
                        p="0"
                    >
                        <Image src={linkedInFooter} alt="Linkedin-footer-image" />
                    </Button>
                    <Button
                        as="a"
                        href="https://github.com/moehim123"
                        target="_blank"
                        rel="noopener noreferrer"
                        bg="transparent"
                        _hover={{ bg: "transparent" }}
                        _focus={{ boxShadow: "none" }}
                        _active={{ bg: "transparent" }}
                        p="0"
                    >
                        <Image src={githubFooterImage} alt="Github-footer-image" />
                    </Button>
                </Flex>
            </HStack>
        </Box>
    );
};

export default Footer;
