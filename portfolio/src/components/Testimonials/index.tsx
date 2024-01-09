import { Box, Heading, Text } from "@chakra-ui/react";
import TestimonialsSlider from "./TestimonialsSlider";
import React from "react";

const Testimonials = () => {
  return (
    <Box bg="#02050A" p={{ base: "40px 10px", md: "60px 0" }}>
      <Box>
        <Heading m="0" fontSize="36px" color="white" textAlign="center">
          <Text as="span" color="yellow">
            Clients&nbsp;
          </Text>
          Review
        </Heading>
      </Box>

      <Box maxW="1280px" margin="0 auto" p="50px 0 40px">
        <TestimonialsSlider />
      </Box>
    </Box>
  );
};

export default Testimonials;
