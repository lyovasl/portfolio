import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
interface ReviewProps {
  name: string;
  role: string;
  img: string;
}

const ClientReview: FC<ReviewProps> = ({ name, role, img }) => {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      alignItems="center"
    >
      <Box
        borderRadius="10px"
        overflow="hidden"
        display="flex"
        justifyContent="center"
      >
        <Image
          src={img}
          alt={name}
          width={100}
          height={100}
          objectFit="contain"
        />
      </Box>

      <Box display="flex" alignItems="center" maxW="auto" mt="8px">
        <Image src="/icons/star_icon.svg" alt="Star" width={16} height={16} />
        <Image src="/icons/star_icon.svg" alt="Star" width={16} height={16} />
        <Image src="/icons/star_icon.svg" alt="Star" width={16} height={16} />
        <Image src="/icons/star_icon.svg" alt="Star" width={16} height={16} />
        <Image src="/icons/star_icon.svg" alt="Star" width={16} height={16} />
      </Box>
      <Flex flexDirection="column" gap="10px" maxW="400px">
        <Heading as="h3" margin="5px 0 0 0" color="#fff">
          {name}
        </Heading>
        <Text fontSize="18px" color="yellow"  as="span">
          {role}
        </Text>
        <Text opacity="0.75" fontSize="18px" color="#fff" as="span">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          nisi quaerat officia, sed possimus quod!
        </Text>
      </Flex>
    </Flex>
  );
};

export default ClientReview;
