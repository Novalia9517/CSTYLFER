import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBard from "./SideBard";

const Layout = ({ children }) => {
  return (
    <Box maxW={"100vw"}>
      <Navbar />
      <Flex minHeight={"full"}>
        <SideBard />
        <Box
          border="1px"
          height={"full"}
          borderColor="blue.300"
          p="10"
          w="75vw"
          mr={"2"}
          color="gray.600"
        >
          {children}
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Layout;
