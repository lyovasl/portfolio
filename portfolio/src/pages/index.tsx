"use client";

import React, { useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/HeroSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SocialPage from "@/components/SocialsPages";
import Testimonials from "@/components/Testimonials";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <ChakraProvider theme={theme}>
      <Box maxW="1440px" margin="0 auto">
        <Box margin="0 auto">
          {/* Nav */}
          <MobileNav nav={nav} closeNav={closeNav} />
          <Nav openNav={openNav} />
          {/* Section */}
          <Hero />

          <Box>
            <About />
            <Skills />
            <SocialPage />
            <Testimonials />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default HomePage;
