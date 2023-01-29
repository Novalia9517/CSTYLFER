import React from "react";
import {
  Grid,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md";

const CustomSlider = ({ min, max, value, title, change, step = 1 }) => {
  return (
    <Grid templateColumns={"repeat(2, 1fr)"} gap={4} mt="3">
      <Text fontSize="14px" fontWeight="semibold" color="gray.500">
        {title}
      </Text>
      <Slider
        aria-label="slider-ex-4"
        value={value}
        onChange={change}
        min={min}
        max={max}
        step={step}
      >
        <SliderTrack bg="blue.100">
          <SliderFilledTrack bg="blue.300" />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color="blue.300" as={MdGraphicEq} />
        </SliderThumb>
      </Slider>
    </Grid>
  );
};

export default CustomSlider;
