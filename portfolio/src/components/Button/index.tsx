import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";

interface ButtonPorps {
  text: string;
  icon?: any;
  width: string;
  height: string;
}

const ButtonPage: FC<ButtonPorps> = ({ text, icon, width, height }) => {
  return (
    <Button
      p="20px 40px"
      display="flex"
      alignItems="center"
      gap="20px"
      fontSize="18px"
      fontWeight="400"
      borderRadius="50px"
    
      width={width}
      height={height}
    >
      {text}
      {icon && <Image src={icon} alt="Icon" width={24} height={24}  />}
    </Button>
  );
};

export default ButtonPage;
