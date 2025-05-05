// src/components/ProjectPageTemplate.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Link as ChakraLink,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import LinkIcon from './Images/link-icon.svg';
import OverviewIcon from './Images/overview-icon.svg';
import ChallengesIcon from './Images/challenges-icon.svg';
import SolutionsIcon from './Images/solutions-icon.svg';

export const SkillBadge = ({ children }) => (
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

const SectionRenderer = ({ section, themeColor }) => {
  const { key, title, items, text, images, subsections } = section;
  const isOverview = /overview/i.test(title);
  const isChallenges = /challenges/i.test(title);
  const isSolutions = /solutions/i.test(title);

  if (isOverview || isChallenges || isSolutions) {
    const Icon = isOverview
      ? OverviewIcon
      : isChallenges
      ? ChallengesIcon
      : SolutionsIcon;
    return (
      <Flex wrap="wrap" gapX="55px" gapY="75px">
        {items.map((item, idx) => (
          <HStack
            key={idx}
            align="center"
            gap="14px"
            w={{ base: 'full', md: 'calc((100% - 45px) / 2)' }}
          >
            <Image src={Icon} boxSize="20px" />
            <Text
              fontFamily="Mona Sans"
              fontSize="14px"
              fontWeight="400"
              color="#1E1E1E"
            >
              {item}
            </Text>
          </HStack>
        ))}
      </Flex>
    );
  }

  if (key === 'high_fidelity') {
    return (
      <Flex overflowX="auto" gap="24px">
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            flex="0 0 100%"
            maxW="100%"
            borderRadius="8px"
          />
        ))}
      </Flex>
    );
  }

  if (subsections) {
    return (
      <VStack spacing="32px" align="flex-start">
        {subsections.map((sub, i) => (
          <Box key={i} w="full">
            <Box
              display="inline-flex"
              padding="10px 24px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="8px"
              background="#E7EAE8"
            >
              <Text
                color="#1E1E1E"
                fontFamily="Mona Sans"
                fontSize="24px"
                fontWeight="400"
                lineHeight="normal"
              >
                {sub.title}
              </Text>
            </Box>
            <VStack spacing="24px" align="flex-start" pt="16px">
              {sub.text && (
                <Text
                  fontFamily="Mona Sans"
                  fontSize="14px"
                  fontWeight="400"
                  color="#1E1E1E"
                >
                  {sub.text}
                </Text>
              )}
              {sub.pdf && (
                <Box w="1028px" h="600px">
                  <object
                    data={sub.pdf}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                  >
                    <Text fontSize="14px">
                      Your browser doesn’t support embedded PDFs.&nbsp;
                      <ChakraLink href={sub.pdf} color={themeColor}>
                        Download the report
                      </ChakraLink>
                    </Text>
                  </object>
                </Box>
              )}
              {sub.images &&
                sub.images.map((src, idx) => (
                  <Image key={idx} src={src} w="100%" />
                ))}
            </VStack>
          </Box>
        ))}
      </VStack>
    );
  }

  return (
    <VStack spacing="24px" align="flex-start">
      {text && (
        <Text
          fontFamily="Mona Sans"
          fontSize="14px"
          fontWeight="400"
          color="#1E1E1E"
        >
          {text}
        </Text>
      )}
      {images &&
        images.map((src, i) => <Image key={i} src={src} w="100%" />)}
    </VStack>
  );
};

const ProjectPageTemplate = ({ data }) => {
  const { sidebar, bannerImage, liveLink, skills, sections, themeColor } =
    data;
  const [active, setActive] = useState(sidebar[0].key);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      for (let sec of sidebar) {
        const el = sectionRefs.current[sec.key];
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 120) setActive(sec.key);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sidebar]);

  return (
    <Flex>
      <VStack
        as="nav"
        pos="sticky"
        top="0"
        w="232px"
        h="517px"
        p="18px"
        bg="#F6F6F6"
        align="flex-start"
        borderRight="1px solid #F6F6F6"
        borderBottomRightRadius="8px"
        marginRight="32px"
      >
        {sidebar.map((sec) => (
          <ChakraLink
            key={sec.key}
            href={`#${sec.key}`}
            fontFamily="Mona Sans"
            fontSize="11px"
            fontWeight="400"
            color={active === sec.key ? '#BABCB9' : '#1E1E1E'}
          >
            {sec.title}
          </ChakraLink>
        ))}
      </VStack>
      <VStack flex="1" spacing="48px" align="flex-start" px="24px">
        <Image src={bannerImage} w="100%" />
        {liveLink && (
          <HStack align="center" gap="10px">
            <Image src={LinkIcon} boxSize="20px" />
            <ChakraLink
              href={liveLink}
              fontFamily="Mona Sans"
              fontSize="18px"
              fontWeight="400"
              color="#1E1E1E"
            >
              {liveLink}
            </ChakraLink>
          </HStack>
        )}
        <Box
          display="flex"
          width="166px"
          padding="10px 24px"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          borderRadius="48px"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.1)"
        >
          <Text
            flex="1 0 0"
            color="#1E1E1E"
            textAlign="center"
            fontFamily="Mona Sans"
            fontSize="18px"
            fontWeight="400"
            lineHeight="normal"
          >
            Skills
          </Text>
        </Box>
        <Wrap spacing="14px">
          {skills.map((skill) => (
            <WrapItem key={skill}>
              <SkillBadge>{skill}</SkillBadge>
            </WrapItem>
          ))}
        </Wrap>
        {sections.map((sec) => (
          <Box
            key={sec.key}
            id={sec.key}
            ref={(el) => (sectionRefs.current[sec.key] = el)}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="24px"
            w="1170px"
            marginBottom="84px"
          >
            <Text
              fontFamily="Mona Sans"
              fontSize="34px"
              fontWeight="500"
              color="#1E1E1E"
            >
              {sec.title}
            </Text>
            <SectionRenderer section={sec} themeColor={themeColor} />
          </Box>
        ))}
      </VStack>
    </Flex>
  );
};

export default ProjectPageTemplate;
