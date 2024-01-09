import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguge";

const Skills = () => {
  return (
    <Box bg="#D8D8EB" p={{ base: "40px 10px", md: "80px 0" }}>
      <Box>
        <Heading
          margin="0"
          textAlign="center"
          color="#fff"
          fontSize="36px"
          as="h1"
        >
          Eduction &&nbsp;
          <Text color="yellow" as="span">
            Skills
          </Text>
        </Heading>
      </Box>

      <Box mt="40px">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="40px"
        >
          <Flex
            gap="50px"
            flexWrap={{ base: "wrap", md: "nowrap" }}
            justifyContent="center"
          >
            <SkillsItem title="React Developer" year="2022-2023" />
            <SkillsItem title="Type Script" year="2022-2023" />
          </Flex>

          <SkillsLanguage skill1="HTML5" skill2="css3" skill3="JS" />
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
