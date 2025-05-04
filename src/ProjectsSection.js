// src/ProjectsSection.js
import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Divider,
  SimpleGrid,
  Image,
  Text,
  Wrap,
  WrapItem,
  Flex,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import standeProjectImage from './Images/stande-project-image.svg';
import himmatsProjectImage from './Images/himmats-project-image.svg';
import trackdayProjectImage from './Images/trackday-project-image.svg';

const SkillBadge = ({ children }) => (
  <Box
    display="inline-flex"
    px="24px"
    py="10px"
    justifyContent="center"
    alignItems="center"
    borderRadius="48px"
    border="1px solid #1E1E1E"
    fontFamily="Mona Sans"
    fontSize="14px"
    fontWeight="400"
    color="#1E1E1E"
  >
    {children}
  </Box>
);

const ProjectCard = ({ id, image, tag, title, description, skills }) => (
  <VStack spacing="24px" align="flex-start">
    <Box
      role="group"
      position="relative"
      w="487px"
      h="255px"
      overflow="hidden"
      borderRadius="0px 0px 48px 48px"
      boxShadow="0px 4px 4px rgba(0,0,0,0.1)"
    >
      <Image src={image} alt={title} objectFit="cover" w="100%" h="100%" />

      <Box
        position="absolute"
        inset="0"
        bg="rgba(2,2,2,0.65)"
        borderRadius="0px 0px 48px 48px"
        opacity={0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
        display="flex"
        flexDirection="column"
        p="24px"
      >
        <Flex
          w="119px"
          h="27px"
          p="10px"
          align="center"
          justify="center"
          borderRadius="8px"
          bg="#000"
        >
          <Text fontFamily="Mona Sans" fontSize="12px" fontWeight="500" color="#FFF">
            {tag}
          </Text>
        </Flex>

        <Box flex="1" />

        <ChakraLink
          as={RouterLink}
          to={`/projects/${id}`}
          fontFamily="Mona Sans"
          fontSize="12px"
          fontWeight="400"
          color="#FFF"
          textAlign="center"
        >
          View Project
        </ChakraLink>

        <Box mt="auto">
          <Text fontFamily="Mona Sans" fontSize="24px" fontWeight="500" color="#FFF" mb="8px">
            {title}
          </Text>
          <Text
            fontFamily="Mona Sans"
            fontSize="12px"
            fontWeight="400"
            color="#FFF"
            maxW="391px"
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Box>

    <Wrap spacing="11px">
      {skills.map((skill) => (
        <WrapItem key={skill}>
          <SkillBadge>{skill}</SkillBadge>
        </WrapItem>
      ))}
    </Wrap>
  </VStack>
);

const ProjectsSection = () => {
  const projects = [
    {
      id: 'stande',
      image: standeProjectImage,
      tag: 'Solo Project',
      title: 'Stande',
      description:
        'A web application that helps students solve standardized exams, get instant feedback on their solutions and track their progress',
      skills: ['UI/UX', 'Frontend Development'],
    },
    {
      id: 'himmats',
      image: himmatsProjectImage,
      tag: 'Solo Project',
      title: 'Himmats',
      description:
        'A web application that helps students solve standardized exams, get instant feedback on their solutions and track their progress',
      skills: ['UI/UX', 'Frontend Development'],
    },
    {
      id: 'trackday',
      image: trackdayProjectImage,
      tag: 'Group Project',
      title: 'Trackday',
      description:
        'A web application that helps students solve standardized exams, get instant feedback on their solutions and track their progress',
      skills: ['UI/UX', 'Frontend Development'],
    },
  ];

  return (
    <Box px={{ base: '16px', md: '0' }} maxW="1248px" mx="auto" mt="205px">
      <Heading
        color="#1E1E1E"
        fontFamily="Montserrat"
        fontSize="48px"
        fontWeight="600"
        lineHeight="122.016%"
        textTransform="uppercase"
        mb="8px"
      >
        Projects for startup companies
      </Heading>

      <Divider bg="#D1D1E1" h="1px" mb="24px" />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="24px">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;


