"use client";
import usersData from "@/data/data";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SocialPage = () => {
  const [hoveredUser, setHoveredUser] = useState<number | null>(null);

  return (
    <>
      <Box textAlign="center" pt={{ base: "30px", md: "80px" }}>
        <Heading as="h2" margin="0" fontSize="36px">
          Im on Social&nbsp;
          <Text as="span" color="yellow">
            Media
          </Text>
        </Heading>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        margin={{ base: "30px auto 30px", md: "50px auto 80px" }}
        gap="10px"
        justifyContent="center"
        maxW="1280px"
      >
        {usersData.map((user, index) => (
          <Flex
            width="300px"
            flexDirection="column"
            color="white"
            cursor="pointer"
            transition="all 0.5s"
            gap="8px"
            alignItems="center"
            bg={hoveredUser === index ? "#50657D" : "#69818d"}
            padding="8px"
            border="1px solid transparent"
            borderRadius="5px"
            textAlign="center"
            key={index}
            onMouseEnter={() => setHoveredUser(index)}
            onMouseLeave={() => setHoveredUser(null)}
          >
            <Text fontSize="20px" as="p" margin="0">
              {user.socaialpage}
            </Text>
            <Image src={user.icon} width={40} height={40} alt="icon" />
            <Link href={user.url} style={{ fontSize: "18px" }}>
              {user.url}
            </Link>
          </Flex>
        ))}
      </Box>
    </>
  );
};

export default SocialPage;
