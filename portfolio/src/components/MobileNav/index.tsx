import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { FC } from "react";

interface MobileNavProps {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ nav, closeNav }) => {
  const navAnimation = nav ? "translateY(0)" : "translateY(-1200px)";

  return (
    <Box
      bg="#010032"
      maxW='1280px'
      transform={navAnimation}
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="101"
      position="fixed"
      transition="all"
    >
      <UnorderedList
        listStyleType="none"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        margin="0"
        gap="30px"
        fontSize="15px"
        color="#fff"
      >
        <ListItem>Home</ListItem>
        <ListItem>Blog</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </UnorderedList>
      <Box
        onClick={closeNav}
        position="absolute"
        cursor="pointer"
        p="5px"
        top="10px"
        right="15px"
        color="#fff"
      >
        <Text margin="0">X</Text>
      </Box>
    </Box>
  );
};

export default MobileNav;
