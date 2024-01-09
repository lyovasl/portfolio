import { Box, Heading, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface SkillsItemProps {
  title: string;
  year: string;
}

const SkillsItem: FC<SkillsItemProps> = ({ title, year }) => {
  return (
    <Box
      maxWidth="300px"
      boxShadow="0px 5px 10px 2px rgba(34, 60, 80, 0.2)"
      padding="10px"
      fontSize="16px"
      display="flex"
      flexDirection="column"
      gap="8px"
      color="white"
      fontWeight="400"
      bg="#d7e6e9"
      borderRadius="10px"
      textAlign="center"
    >
      <Heading margin="0" as="h1">
        {year}
      </Heading>

      <Text as="span">{title}</Text>

      <Text as="p" margin="0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        neque?
      </Text>
    </Box>
  );
};

export default SkillsItem;
