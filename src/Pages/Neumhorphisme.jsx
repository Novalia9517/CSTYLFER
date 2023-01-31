import {
  Text,
  Box,
  Flex,
  Grid,
  GridItem,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightAddon,
  Icon,
  Code,
  HStack,
  Button,
  flatten,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Layout from "../Components/Layout";
import { MdContentCopy } from "react-icons/md";
import CustomSlider from "../Components/CustomSlider";
import { BsArrowUpLeftSquare } from "react-icons/bs";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Neumhorphisme = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [borderRadius, setBorderRadius] = useState(10);
  const [distance, setDistance] = useState(7);
  const [blur, setBlur] = useState(7);
  const [transparancy, setTransparancy] = useState("");
  const [intensity, setIntensity] = useState();
  const [linear, setLinear] = useState(false);
  const [color, setColor] = useState(`#fd5353`);
  const [backGround, setBackground] = useState("#fd5353");
  const [backGroundImage, setBackgroundImage] = useState("");
  const [inset, setInset] = useState(false);
  const [currValue, setCurrVal] = useState("TopLeft");
  const [neu, setNeu] = useState(
    `${distance}px ${distance}px ${blur}px gray, -${distance}px -${distance}px ${blur}px #ffffff`
  );

  const DistanceChange = (e) => {
    setDistance(e);
    setBlur(e * 2);
    setNeu(neu);
  };
  const AllDirections = {
    TopLeft: `${
      inset ? "inset" : ""
    } ${distance}px ${distance}px ${blur}px gray, ${
      inset ? "inset" : ""
    } -${distance}px -${distance}px ${blur}px #ffffff`,
    TopRight: `${
      inset ? "inset" : ""
    } -${distance}px ${distance}px ${blur}px gray, ${
      inset ? "inset" : ""
    } ${distance}px -${distance}px ${blur}px #ffffff`,
    BottomLeft: `${
      inset ? "inset" : ""
    } ${distance}px -${distance}px ${blur}px gray, ${
      inset ? "inset" : ""
    } -${distance}px ${distance}px ${blur}px #ffffff`,
    BottomRight: `${
      inset ? "inset" : ""
    } -${distance}px -${distance}px ${blur}px gray, ${
      inset ? "inset" : ""
    } ${distance}px ${distance}px ${blur}px #ffffff`,
  };

  const onDirectionChange = (value) => {
    const newNeu = AllDirections[value];
    setNeu(newNeu);
    setCurrVal(value);
  };

  const onChooseType = (value) => {
    if (value == "flat") {
      setBackground(color);
      setInset(false);
      setLinear(false);
    } else if (value == "pressed") {
      setBackground(color);
      setInset(true);
      setLinear(false);
    } else {
      console.log(color);
      console.log(color.substring(1, 3));
      let red = parseInt(color.substring(1, 3), 16);
      let green = parseInt(color.substring(3, 5), 16);
      let blue = parseInt(color.substring(5, 7), 16);
      console.log("before", red, green, blue);
      let newRed = Math.ceil(red * 1.2) <= 255 ? Math.ceil(red * 1.2) : 255;
      let newGreen =
        Math.ceil(green * 1.2) <= 255 ? Math.ceil(green * 1.2) : 255;
      let newBlue = Math.ceil(blue * 1.2) <= 255 ? Math.ceil(blue * 1.2) : 255;
      console.log("after", red, green, blue);
      let rgb1 =
        `#` +
        `${newRed.toString(16)}` +
        `${newGreen.toString(16)}` +
        `${newBlue.toString(16)}`;
      let rgb2 =
        `#` +
        `${Math.ceil(red * 0.8).toString(16)}` +
        `${Math.ceil(green * 0.8).toString(16)}` +
        `${Math.ceil(blue * 0.8).toString(16)}`;
      // console.log(rgb1, rgb2)
      if (value == "concave") {
        setBackgroundImage(`linear-gradient(345deg, ${rgb1}, ${rgb2});`);
        setInset(false);
        setLinear(true);
      } else {
        setBackgroundImage(`linear-gradient(315deg, ${rgb2}, ${rgb1});`);
        setInset(false);
        setLinear(true);
      }
    }
    setNeu(neu);
  };
  const onCopy = (value) => {
    toast.info(`${value}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    onDirectionChange(currValue);
  });
  return (
    <Layout>
      <Text fontSize={"3xl"} fontWeight="bold">
        Neumhorphisme
      </Text>
      <Text fontSize={"xl"} fontWeight="bold">
        ( Bug Fixing on proggress )
      </Text>
      <Box w="100%" p={10}>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
          <GridItem
            w={"100%"}
            h="350px"
            position={"relative"}
            bg={`${color}`}
            backgroundImage={linear ? `${backGroundImage}` : ``}
            border="1px"
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <Box
              w={`${width}px`}
              h={`${height}px`}
              bg={`${color}`}
              backgroundImage={linear ? `${backGroundImage}` : ``}
              borderRadius={`${borderRadius}%`}
              boxShadow={`${neu}`}
            ></Box>
            <Icon
              as={BsArrowUpLeftSquare}
              w={7}
              h={7}
              color={"pink.300"}
              position="absolute"
              top={"0"}
              left={"0"}
              transform={"rotate(180deg)"}
              onClick={() => onDirectionChange("TopLeft")}
            />
            <Icon
              as={BsArrowUpLeftSquare}
              w={7}
              h={7}
              color={"pink.300"}
              position="absolute"
              top={"0"}
              right={"0"}
              transform={"rotate(-90deg)"}
              onClick={() => onDirectionChange("TopRight")}
            />
            <Icon
              as={BsArrowUpLeftSquare}
              w={7}
              h={7}
              color={"pink.300"}
              position="absolute"
              bottom={"0"}
              left={"0"}
              transform={"rotate(90deg)"}
              onClick={() => onDirectionChange("BottomLeft")}
            />
            <Icon
              as={BsArrowUpLeftSquare}
              w={7}
              h={7}
              color={"pink.300"}
              position="absolute"
              bottom={"0"}
              right={"0"}
              onClick={() => onDirectionChange("BottomRight")}
            />
          </GridItem>
          <GridItem w={"100%"} h="350px">
            <Text textAlign={"center"} fontWeight="semibold">
              Change Below
            </Text>
            <Grid templateColumns={"repeat(2, 1fr)"} gap={4} mt={3}>
              <InputGroup size="sm" color="blue.300" border={"2px"}>
                <InputLeftAddon children="Width" bg={"white"} />
                <Input
                  type="number"
                  placeholder="max 350"
                  value={width}
                  _placeholder={{ opacity: "0.4", color: "skyblue" }}
                  onChange={(e) =>
                    e.target.value < 350
                      ? setWidth(e.target.value)
                      : setWidth(350)
                  }
                />
                <InputRightAddon children="px" bg="white" />
              </InputGroup>
              <InputGroup size="sm" color="blue.300" border={"2px"}>
                <InputLeftAddon
                  children="Height"
                  bg={"white"}
                  color="blue.300"
                />
                <Input
                  type="number"
                  placeholder="max 350"
                  value={height}
                  _placeholder={{ opacity: "0.4", color: "skyblue" }}
                  onChange={(e) =>
                    e.target.value < 350
                      ? setHeight(e.target.value)
                      : setHeight(350)
                  }
                />
                <InputRightAddon children="px" bg={"white"} color="blue.300" />
              </InputGroup>
            </Grid>
            <InputGroup size="sm" w={36} color="blue.300" border={"2px"} mt={3}>
              <InputLeftAddon children="Color" bg={"white"} color="blue.300" />
              <Input
                type="color"
                _placeholder={{ opacity: "0.4", color: "skyblue" }}
                onChange={(e) => setColor(e.target.value)}
              />
            </InputGroup>
            <CustomSlider
              min={0}
              max={50}
              title={"Border Radius"}
              change={(e) => setBorderRadius(e)}
            />
            <CustomSlider
              min={0}
              max={50}
              title={"Blur"}
              value={blur}
              change={(e) => setBlur(e)}
            />
            <CustomSlider
              min={5}
              max={50}
              title={"Distance"}
              value={distance}
              change={(e) => DistanceChange(e)}
            />
            {/* <CustomSlider min={0.01} max={0.6} step={0.01} title={'Intensity'} change={(e) => setIntensity(e)}/> */}
            <Grid
              display={"flex"}
              width="100%"
              border={"1px"}
              mt={2}
              color="pink.400"
            >
              <Button
                w={"25%"}
                variant="text"
                onClick={() => onChooseType("flat")}
              >
                Flat
              </Button>
              <Button
                w={"25%"}
                variant="text"
                onClick={() => onChooseType("concave")}
              >
                Concave
              </Button>
              <Button
                w={"25%"}
                variant="text"
                onClick={() => onChooseType("convex")}
              >
                Convex
              </Button>
              <Button
                w={"25%"}
                variant="text"
                onClick={() => onChooseType("pressed")}
              >
                Pressed
              </Button>
            </Grid>
          </GridItem>
        </Grid>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={4} mt="3">
          <Box bg="gray.800" h={"full"} px={5} py={3} mt={3}>
            <Flex
              justifyContent={"space-between"}
              color="blue.300"
              cursor={"pointer"}
            >
              <Text fontSize={"11px"}>HTML</Text>
              <Icon
                as={MdContentCopy}
                onClick={() => onCopy("HTML Code Copied")}
              />
            </Flex>
            <Code
              bg="gray.800"
              color="blue.300"
              fontSize={"11px"}
              mt={3}
              children='<div class="neu"></div>'
            ></Code>
          </Box>
          <Box bg="gray.800" h={"full"} px={5} py={3} mt={3}>
            <Flex
              justifyContent={"space-between"}
              color="blue.300"
              cursor={"pointer"}
            >
              <Text fontSize={"11px"}>CSS</Text>
              <Icon
                as={MdContentCopy}
                onClick={() => onCopy("CSS Code Copied")}
              />
            </Flex>
            <Box display={"flex"} flexDirection={"column"}>
              <Code
                bg="gray.800"
                color="blue.300"
                fontSize={"11px"}
                mt={3}
                children={`.neu {`}
              >
                {/* box-shadow : {neu} */}
              </Code>
              <Code bg="gray.800" color="blue.300" fontSize={"11px"} ml={3}>
                border-radius: {borderRadius}; <br />
                box-shadow : {neu} ; <br />
                background : {linear ? backGroundImage : backGround}
              </Code>
              <Code
                bg="gray.800"
                color="blue.300"
                fontSize={"11px"}
                mt={3}
                children={`}`}
              ></Code>
            </Box>
          </Box>
        </Grid>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Box>
    </Layout>
  );
};

export default Neumhorphisme;
