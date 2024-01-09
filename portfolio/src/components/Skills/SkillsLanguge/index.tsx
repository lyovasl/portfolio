import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { FC } from "react";

interface SkillsLanguageProps {
  skill1: string;
  skill2: string;
  skill3: string;
}

const SkillsLanguage: FC<SkillsLanguageProps> = ({
  skill1,
  skill2,
  skill3,
}) => {
  return (
    <Flex justifyContent="space-between" gap="15px" >
      <Box>
        <Heading margin="0" as="h1">
          {skill1}
        </Heading>
      </Box>

      <Box>
        <Heading margin="0" as="h1">
          {skill2}
        </Heading>
      </Box>

      <Box>
        <Heading margin="0" as="h1">
          {skill3}
        </Heading>
      </Box>
    </Flex>
  );
};

export default SkillsLanguage;
