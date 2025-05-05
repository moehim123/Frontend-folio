// src/ProjectsSection.js
import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Divider,
  SimpleGrid,
  AspectRatio,
  Image,
  Text,
  Wrap,
  WrapItem,
  Flex,
  Link as ChakraLink,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

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
    fontSize={{ base: 'xs', md: 'sm' }}
    fontWeight="500"
    color="gray.800"
  >
    {children}
  </Box>
);

const ProjectCard = ({ id, image, tag, title, description, skills }) => {
  // Center overlay content on small screens
  const textAlign = useBreakpointValue({ base: 'center', md: 'left' });
  return (
    <VStack spacing={{ base: 6, md: 8 }} align="stretch">
      <Box role="group" position="relative" overflow="hidden" borderRadius="0 0 48px 48px" boxShadow="md">
        {/* Keep image aspect ratio without hardcoding px */}
        <AspectRatio ratio={487 / 255} maxW="100%">
          <Image src={image} alt={title} objectFit="cover" />
        </AspectRatio>

        <Box
          position="absolute"
          inset="0"
          bg="rgba(0,0,0,0.65)"
          opacity={0}
          transition="opacity 0.3s"
          _groupHover={{ opacity: 1 }}
          p={{ base: 4, md: 6 }}
          display="flex"
          flexDirection="column"
          textAlign={textAlign}
        >
          <Flex
            align="center"
            justify="center"
            borderRadius="md"
            bg="blackAlpha.800"
            px={2}
            py={1}
            w="fit-content"
          >
            <Text fontSize="xs" fontWeight="500" color="white">
              {tag}
            </Text>
          </Flex>

          <Box flex="1" />

          <ChakraLink
            as={RouterLink}
            to={`/projects/${id}`}
            fontSize="sm"
            fontWeight="medium"
            color="white"
            mb={4}
          >
            View Project
          </ChakraLink>

          <Box>
            <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="semibold" color="white" mb={2}>
              {title}
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="white" maxW={{ md: 'sm' }}>
              {description}
            </Text>
          </Box>
        </Box>
      </Box>

      <Wrap spacing={{ base: 2, md: 3 }} justify={{ base: 'center', md: 'flex-start' }}>
        {skills.map((skill) => (
          <WrapItem key={skill}>
            <SkillBadge>{skill}</SkillBadge>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

const ProjectsSection = () => {
  const projects = [
    { id: 'stande', image: standeProjectImage, tag: 'Solo Project', title: 'Stande', description: 'A web application that helps students...', skills: ['UI/UX', 'Frontend'] },
    { id: 'himmats', image: himmatsProjectImage, tag: 'Solo Project', title: 'Himmats', description: 'A web application that helps students...', skills: ['UI/UX', 'Frontend'] },
    { id: 'trackday', image: trackdayProjectImage, tag: 'Group Project', title: 'Trackday', description: 'A web application that helps students...', skills: ['UI/UX', 'Frontend'] },
  ];

  return (
    <Box
      px={{ base: 4, md: 0 }}
      maxW="7xl"
      mx="auto"
      mt={{ base: 16, md: 48 }}
      mb={{ base: 16, md: 32 }}
    >
      <Heading
        color="gray.800"
        fontSize={{ base: '3xl', md: '5xl' }}
        fontWeight="bold"
        textTransform="uppercase"
        textAlign={{ base: 'center', md: 'left' }}
        mb={{ base: 4, md: 2 }}
      >
        Projects for startup companies
      </Heading>

      <Divider borderColor="gray.300" mb={{ base: 6, md: 8 }} />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8, lg: 10 }}>
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;
