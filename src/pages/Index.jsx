import React from "react";
import { Box, Container, Flex, Heading, Text, Image, Button, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Flex direction="column" align="center" mb={10}>
        <Box mb={6} borderRadius="full" overflow="hidden" boxShadow="lg">
          <Image src="https://images.unsplash.com/photo-1505075448726-57fe033637a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMYXVyYSUyMFN1bW1lcnN8ZW58MHx8fHwxNzA5MTA4NjQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Laura Summers" boxSize="150px" objectFit="cover" />
        </Box>
        <Heading as="h1" size="xl" mb={2}>
          Laura Summers
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Front-End Developer & UI Designer
        </Text>
      </Flex>

      <VStack spacing={4} mb={10}>
        <Text textAlign="center">Hello! I'm Laura, a passionate front-end developer with a love for crafting beautiful and user-friendly websites and applications. With a keen eye for design and a solid technical foundation, I bring ideas to life on the digital canvas.</Text>
        <Text textAlign="center">When I'm not coding or pushing pixels, you'll find me in the great outdoors or spending time with my family and friends.</Text>
      </VStack>

      <HStack justifyContent="center" spacing={4}>
        <Link href="https://github.com/laurasummers" isExternal>
          <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray">
            GitHub
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/laurasummers" isExternal>
          <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue">
            LinkedIn
          </Button>
        </Link>
        <Link href="https://twitter.com/laurasummers" isExternal>
          <Button leftIcon={<Icon as={FaTwitter} />} colorScheme="twitter">
            Twitter
          </Button>
        </Link>
        <Link href="mailto:laura@summers.com">
          <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="red">
            Email
          </Button>
        </Link>
      </HStack>
    </Container>
  );
};

export default Index;
