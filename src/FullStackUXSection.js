import React, { useRef, useEffect } from "react";import {
  Box,
  VStack,
  Heading,
  Divider,
  Text,
  Wrap,
  WrapItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import demoVideo from "./Images/llm-project-images/demo-video.mp4";




const SkillBadge = ({ children }) => (
  <Box
    display="inline-flex"
    px={{ base: 3, md: 6 }}
    py={{ base: 1, md: 2 }}
    justifyContent="center"
    alignItems="center"
    borderRadius="full"
    border="1px solid"
    borderColor="gray.700"
    fontSize={{ base: "xs", md: "sm" }}
    fontWeight="500"
    color="gray.800"
  >
    {children}
  </Box>
);

const FullStackUXSection = () => {

  const videoRef = useRef(null); 
  useEffect(() => {
  if (videoRef.current) {
    videoRef.current.playbackRate = 2; // 2x speed
  }
}, []);
  const project = {
    id: "llmproject",
    title: "Local LLM Experimentation Platform",
    tag: "Solo Project",
    description:
      "A local AI experimentation workspace for testing prompts, comparing model outputs, and annotating runs.",
    skills: [
      "UI/UX",
      "Frontend Development (React)",
      "Backend Development (Node js)",
      "Typescript",
      "Javascript",
      "Figma",
      "Tailwind",
    ],
  };

  return (
    <Box
      px={{ base: 4, md: 0 }}
      maxW="7xl"
      mx="auto"
      mt={{ base: 16, md: 32 }}
      mb={{ base: 16, md: 20 }}
    >
      <Heading
        color="gray.800"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        textTransform="uppercase"
        textAlign={{ base: "center", md: "left" }}
        mb={{ base: 4, md: 2 }}
      >
        Full Stack + UX/UI
      </Heading>

      <Divider borderColor="gray.300" mb={{ base: 6, md: 8 }} />

      <VStack align={{ base: "center", md: "flex-start" }} spacing={6}>
        <Box
          role="group"
          position="relative"
          width={{ base: "100%", md: "622px" }}
          height={{ base: "375px", md: "375px" }}
          borderRadius="24px"
          border="3px solid #FFF"
          boxShadow="4px 4px 18px 0 rgba(0, 0, 0, 0.12)"
          overflow="hidden"
          bg="white"
          transition="all 0.3s ease"
          _hover={{
            border: "1px solid #000",
          }}
        >
          <Box
             as="video"
            ref={videoRef}
            src={demoVideo}
            autoPlay
            loop
            muted
            playsInline
            w="100%"
            h="100%"
            objectFit="cover"
          />

          <Box
            position="absolute"
            inset="0"
            bg="rgba(0,0,0,0.62)"
            opacity={0}
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 1 }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={6}
          >
            <Box>
              <Text
                fontSize="xs"
                fontWeight="500"
                color="white"
                bg="rgba(255,255,255,0.12)"
                display="inline-flex"
                px={3}
                py={1}
                borderRadius="md"
              >
                {project.tag}
              </Text>
            </Box>

            <Box textAlign="center">
              <ChakraLink
                as={RouterLink}
                to={`/projects/${project.id}`}
                fontSize="sm"
                fontWeight="600"
                color="white"
              >
                View Project
              </ChakraLink>
            </Box>

            <Box>
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="600"
                color="white"
                mb={2}
              >
                {project.title}
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="white"
                maxW="520px"
              >
                {project.description}
              </Text>
            </Box>
          </Box>
        </Box>

        <Wrap
          spacing={{ base: 2, md: 3 }}
          justify={{ base: "center", md: "flex-start" }}
          width={{ base: "100%", md: "622px" }}
        >
          {project.skills.map((skill) => (
            <WrapItem key={skill}>
              <SkillBadge>{skill}</SkillBadge>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Box>
  );
};

export default FullStackUXSection;