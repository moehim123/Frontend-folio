import React from "react";
import { Box, HStack, VStack, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import FigmaIcon from "./Images/FigmaIcon.svg";
import GithubIcon from "./Images/GithubIcon.svg";
import ArrowIcon from "./Images/ArrowIcon.svg";
import ProjectData from "./ProjectData";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Projects = () => {
  return (
    <MotionBox
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box>
        {ProjectData().map((project, index) => (
          <Box
            key={index}
            width={{ base: "90%", md: "80%", lg: "70%" }}
            margin="0 auto"
            borderRadius="14px"
            border = "2px #D3D3D3"
            bg = "#fff"
            marginTop={{ base: "60px", md: "124px" }}
            padding={{ base: "16px", md: "24px" }}
            position="relative"
          >
            <HStack
              gap={{ base: "10px", md: "20px" }}
              flexDirection={{ base: "column", lg: "row" }}
              alignItems={{ base: "flex-start", lg: "center" }}
            >
              <VStack
                width={{ base: "100%", lg: "325px" }}
                gap={{ base: "10px", md: "15px" }}
                alignItems="flex-start"
              >
                <Heading
                  color="#504E4E"
                  fontSize={{ base: "20px", md: "24px" }}
                  fontWeight="600"
                  fontStyle="normal"
                >
                  {project.projectTitle}
                </Heading>
                <Image src={project.projectImage} alt={`${project.projectTitle}-image`} width={{ base: "100%", lg: "auto" }} />
                <HStack gap={{ base: "10px", md: "27px" }} flexWrap="wrap">
                  <Flex gap="4px">
                    <Image src={GithubIcon} alt="Github-icon" />
                    <Text
                      as="a"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="#504E4E"
                      fontSize={{ base: "10px", md: "12px" }}
                      fontWeight="250"
                      fontStyle="normal"
                    >
                      Github link
                    </Text>
                  </Flex>
                  <Flex gap="4px">
                    <Image src={FigmaIcon} alt="Figma-icon" />
                    <Text
                      as="a"
                      href={project.FigmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="#504E4E"
                      fontSize={{ base: "10px", md: "12px" }}
                      fontWeight="250"
                      fontStyle="normal"
                    >
                      Figma link
                    </Text>
                  </Flex>
                </HStack>
              </VStack>
              <Text
                width={{ base: "100%", lg: "578px" }}
                color="#504E4E"
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="400"
                fontStyle="normal"
              >
                {project.projectDescription}
              </Text>
              <Flex
                direction="row"
                alignItems="flex-end"
                justifyContent={{ base: "flex-start", lg: "flex-end" }}
                position={{ base: "relative", lg: "absolute" }}
                bottom={{ lg: "24px" }}
                right={{ lg: "24px" }}
                gap="8px"
                marginTop={{ base: "20px", lg: "0" }}
              >
                <Text
                  color="#504E4E"
                  fontSize={{ base: "10px", md: "12px" }}
                  fontWeight="250"
                  fontStyle="normal"
                  whiteSpace="nowrap"
                >
                  View live project
                </Text>
                <Button
                  as="a"
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  p="0"
                >
                  <Image
                    src={ArrowIcon}
                    alt="Arrow-Icon"
                    width="65%"
                  />
                </Button>
              </Flex>
            </HStack>
          </Box>
        ))}
      </Box>
    </MotionBox>
  );
};

export default Projects;
