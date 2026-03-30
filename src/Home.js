import React from "react";
import { Box, Flex, VStack, Heading, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";
import CSSImage from "./Images/CSS-Image.svg";
import HTMLImage from "./Images/HTML-Image.svg";
import ReactImage from "./Images/React-Image.svg";
import JavascriptImage from "./Images/Javascript-Image.svg";
import FigmaImage from "./Images/Figma-Image.svg";
import { motion } from "framer-motion";
import TailwindImage from "./Images/Tailwind-Image.svg";
import TypescriptImage from "./Images/typescript-svgrepo...m 1.png";
import NodeJsImage from "./Images/node.js.png";
import MiroImage from "./Images/miro-svgrepo-com 1.png";

const MotionBox = motion(Box);

const tools = [
  { src: JavascriptImage, alt: "Javascript", label: "Javascript" },
  { src: HTMLImage, alt: "HTML 5", label: "HTML 5" },
  { src: CSSImage, alt: "CSS", label: "CSS" },
  { src: FigmaImage, alt: "Figma", label: "Figma" },
  { src: ReactImage, alt: "React", label: "React" },  { src: TailwindImage, alt: "Tailwind", label: "Tailwind" },
  { src: TypescriptImage, alt: "Typescript", label: "Typescript" },
  { src: NodeJsImage, alt: "Node.js", label: "Node.js" },
  { src: MiroImage, alt: "Miro", label: "Miro" },
];

const Home = () => (
  <MotionBox
    id="home"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <Box bg="#F9F9F9" mt={{ base: "124px", md: "204px" }} px={{ base: "16px", md: "0" }}>
      <VStack spacing={{ base: 4, md: 8 }} align="flex-start" maxW="1265px" mx="auto">
        <Flex align="center" gap="14px">
          <Text
            color="#1E1E1E"
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight="700"
          >
            Hi _______________ I am Mohammed
          </Text>
        </Flex>
        <Heading
          color="#565555"
          fontFamily="Montserrat"
          fontSize={{ base: "24px", md: "32px" }}
          fontWeight="600"
          textTransform="uppercase"
          w="full"
        >
          Product designer &  developer
        </Heading>
        <Heading
          color="#1E1E1E"
          fontFamily="Montserrat"
          fontSize={{ base: "34px", md: "52px" }}
          fontWeight="600"
          textTransform="uppercase"
          w="full"
        >
          I LOVE BEAUTIFUL DESIGN, BUT I CHOOSE FUNCTIONALITY FIRST 
        </Heading>
        <Text
          color="#1E1E1E"
          fontFamily="Montserrat"
          fontSize={{ base: "16px", md: "24px" }}
          fontWeight="400"
          lineHeight="122%"
          w={{ base: "full", md: "710px" }}
        >
          I love working on all the stages of the design process to build a
          digital product and see their interactions come to life through
          frontend development.
        </Text>
        <Wrap
          spacing={{ base: 3, md: 6 }}
          w={{ base: "full", md: "710px" }}
          justify="flex-start"
        >
          {tools.map((tool) => (
            <WrapItem key={tool.label}>
              <Flex
                w="166px"
                py="10px"
                px="24px"
                align="center"
                justify="center"
                gap="10px"
                borderRadius="48px"
                boxShadow="0px 4px 4px rgba(0,0,0,0.1)"
              >
                <Image src={tool.src} alt={tool.alt} w="20px" h="20px" flexShrink={0} />
                <Text
                  color="#1E1E1E"
                  fontFamily="Mona Sans"
                  fontSize="14px"
                  fontWeight="400"
                >
                  {tool.label}
                </Text>
              </Flex>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Box>
  </MotionBox>
);

export default Home;
