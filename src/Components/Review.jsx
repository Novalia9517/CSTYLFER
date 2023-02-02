import React from "react";
import { Box, HStack, Image, Heading, Stack, Text } from "@chakra-ui/react";
import { animate, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Review = ({ top, left, color, title, rev, id }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animate = useAnimation();
  const one = "48% 52% 71% 29% / 67%  52% 48% 33%";
  const bord = {
    one: "48% 52% 71% 29% / 67%  52% 48% 33%",
    two: "42% 58% 35% 65% / 59%  48% 52% 41%",
    three: "42% 58% 76% 24% / 68% 62% 38% 32%",
  };
  useEffect(() => {
    console.log("Review show ", inView);
    if (inView) {
      animate.start({
        x: ["20vw", "30vw", "-10vw", "0vw"],
        y: ["0vh", "-30vh", "-10vh", "0vh"],
        transition: {
          type: "spring",
          duration: 4,
        },
      });
    }
    if (!inView) {
      animate.start({
        x: "0vw",
        y: "0vh",
      });
    }
  }, [inView]);
  return (
    <Box
      ref={ref}
      as={motion.div}
      // animate={animate}
      mt={top}
      ml={left}
      h="200px"
      w="200px"
      bg={color}
      borderRadius={bord[`${id}`]}
      zIndex={"-10"}
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems="center"
      px={"12"}
    >
      <HStack gap={3}>
        <Heading size="sm" color={"white"}>
          {title}
        </Heading>
      </HStack>
      <Stack mt="6" spacing="3" h="42">
        <Text fontSize={"14px"} fontWeight="semibold" color={"gray.600"}>
          {rev}
        </Text>
      </Stack>
    </Box>
  );
};

export default Review;
