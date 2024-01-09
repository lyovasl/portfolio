import { Box, Heading, Text } from "@chakra-ui/react";
import AnimationType from "../AnimationType";
import React from "react";
import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <Box
      bg="#010032"
      p={{ base: "0 10px", md: "0" }}
      height="calc(100vh - 83px)"
      color="#fff"
      display="flex"
      flexWrap={{ base: "wrap", md: "nowrap" }}
      alignItems="center"
      justifyContent="center"
      gap="40px"
    >
      <Box
        width="500px"
        display="flex"
        flexDirection="column"
        alignItems={{ base: "center", md: "start" }}
        textAlign={{ base: "center", md: "start" }}
      >
        <Box>
          <Heading as="h1" margin="0 0 30px 0" fontSize="36px">
            Hi Im&nbsp;
            <Text color="yellow" as="span">
              LEVON
            </Text>
          </Heading>

          <Text as="p" margin="0 0 15px 0" fontSize="24px" lineHeight="1.4">
            Hi! Im Levon, a program based in Yerevan. I create user-friendly
            interfaces for fast-growing startups.
          </Text>
        </Box>
        <Box mb="15px">
          <AnimationType />
        </Box>

        <Button
          text="Hire me!"
          icon="./icons/message.svg"
          width="199px"
          height="65px"
        />
      </Box>

      <Box
        width="400px"
        borderRadius="250px"
        overflow="hidden"
        display={{ base: "none", md: "block" }}
      >
        <Image
          src="/icons/bg_photo.png"
          alt="user"
          width={400}
          objectFit="cover"
          height={500}
        />
      </Box>
    </Box>
  );
};

export default Hero;
