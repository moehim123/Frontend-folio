import React from "react";
import { Box, HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import CSSImage from "./Images/CSS-Image.svg";
import HTMLImage from "./Images/HTML-Image.svg";
import ReactImage from "./Images/React-Image.svg";
import TailwindImage from "./Images/Tailwind-Image.svg";
import JavascriptImage from "./Images/Javascript-Image.svg";
import AvatarImage from "./Images/Avatar.png";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <MotionBox
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box bg="#000" marginTop="54px">
        <HStack
          width = "100%"
          margin="0 auto"
          gap={{ base: "15px", lg: "178px" }}
          alignItems="center"
          justifyContent="center"
          paddingY="54px"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <VStack gap={{ base: "20px", md: "37px" }} alignItems="left" textAlign={{ base: "center", lg: "left" }}>
            <Heading color="#fff" fontSize={{ base: "24px", md: "32px" }} fontWeight="600" textTransform="uppercase">
              Frontend Developer
            </Heading>
            <Text 
              width={{ base: "100%", md: "578px" }} 
              color="#D4D1D2" 
              fontSize={{ base: "12px", md: "14px" }} 
              fontWeight="400"
            >
              I am a developer with a Bachelor's in Computer Science and a Master's in Interaction Design. I am deeply passionate about product design and have a strong interest in not just creating innovative designs but also in building and developing those designs and their interactions. My focus is on enhancing user experience through thoughtful and engaging interactions that bring the designs to life. Additionally, I have significant backend knowledge, working with frameworks like Node.js and FastAPI, as I believe that would only make me a better Frontend Developer
            </Text>
            <HStack gap="15px" flexWrap="wrap"  alignItems="left" >
              <Image src={JavascriptImage} alt="JavaScript" boxSize={{ base: "40px", md: "50px" }} />
              <Image src={TailwindImage} alt="Tailwind CSS" boxSize={{ base: "40px", md: "50px" }} />
              <Image src={ReactImage} alt="React" boxSize={{ base: "40px", md: "50px" }} />
              <Image src={HTMLImage} alt="HTML" boxSize={{ base: "40px", md: "50px" }} />
              <Image src={CSSImage} alt="CSS" boxSize={{ base: "40px", md: "50px" }} />
            </HStack>
          </VStack>
          <VStack gap="11px" alignItems="center" paddingTop={{ base: "20px", lg: "0" }}>
            <Image src={AvatarImage} alt="Avatar" boxSize={{ base: "100px", md: "150px" }} borderRadius="full" />
            <Heading color="#fff" fontSize={{ base: "14px", md: "18px" }} fontWeight="600" textTransform="uppercase" textAlign="center">
              Hi, I’m Mohammed
            </Heading>
          </VStack>
        </HStack>
      </Box>
    </MotionBox>
  );
};

export default Home;
