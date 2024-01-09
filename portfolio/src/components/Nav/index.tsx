import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { FC } from "react";
import Logo from "../Logo/index";
import Image from "next/image";

interface NavProps {
  openNav: () => void;
}

const Nav: FC<NavProps> = ({ openNav }) => {
  return (
    <Box
      p="15px"
      maxWidth="1280px"
      top="0"
      left="0"
      right="0"
      margin="0 auto"
      zIndex="100"
      bg="#182434"
      position="fixed"
    >
      <Flex
        // maxW="1280px"
        // bg="red"
        alignItems="center"
        justifyContent="space-between "
        // height="80px"
      >
        <Logo />
        <Box>
          <UnorderedList
            listStyleType="none"
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            margin="0"
            gap="40px"
            fontSize="15px"
            color="#fff"
          >
            <ListItem>Home</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
          </UnorderedList>
          <Box
            onClick={openNav}
            width="25px"
            cursor="pointer"
            height="25px"
            display={{ base: "flex", md: "none" }}
          >
            <Image
              src="/icons/burger_icon.png"
              alt="burger"
              width={25}
              height={25}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
