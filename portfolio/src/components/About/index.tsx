import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ButtonPage from "../Button";
import Image from "next/image";

const About = () => {
  return (
    <Box maxW="1440px" bg="#3e2922" margin="0 auto">
      <Box
        maxWidth="1280px"
        margin="0 auto"
        padding={{ base: "40px 10px", md: "60px 0 " }}
      >
        <Flex
          // alignItems={{ base: "center", md: "start" }}
          justifyContent="center"
          textAlign={{ base: "center", md: "start" }}
          gap="40px"
          flexWrap="wrap"
        >
          <Box
            maxW="600px"
            pb="20px"
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", md: "start" }}
          >
            <Heading
              fontSize="28px"
              fontWeight="700"
              as="h1"
              margin="0 0 15px 0"
              color="#01757a"
            >
              About me
            </Heading>
            <Text
              as="p"
              fontSize="36px"
              fontWeight="700"
              color="#fff"
              margin="0 0 10px 0"
            >
              Transforming&nbsp;
              <Text as="span" color="yellow">
                Visions
              </Text>
            </Text>

            <Text fontSize="18px" as="p" color="#fff" margin="0 0 15px 0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              nobis voluptatibus dignissimos quod sint amet voluptas porro
              accusamus nam architecto asperiores non quasi sequi fuga corrupti.
            </Text>

            <ButtonPage width="250px" height="50px" text="Dowload CV" />
          </Box>
          <Box maxWidth="300px" borderRadius="15px" overflow="hidden">
            <Image
              src="/icons/cv_img.png"
              alt="user"
              width={300}
              objectFit="cover"
              height={300}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
