import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/icons/logo.png" alt="Logo" width={152} height={23} />
    </Link>
  );
};

export default Logo;
