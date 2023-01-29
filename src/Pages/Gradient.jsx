import React from "react";
import Layout from "../Components/Layout";
import {
  Text,
  Flex,
  Box,
  Stack,
  Grid,
  GridItem,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightAddon,
  Button,
  HStack,
  Icon,
  Code,
  SimpleGrid,
} from "@chakra-ui/react";
import CustomSlider from "../Components/CustomSlider";
import { useState } from "react";
import { useEffect } from "react";
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Gradient = () => {
  const [typeGrad, setTypeGrad] = useState("linear");
  const [color1, setColor1] = useState("#ff0037");
  const [color2, setColor2] = useState("#ff4870");
  const [color3, setColor3] = useState("#ff90a8");
  const [xAxis, setXAxis] = useState(50);
  const [yAxis, setYAxis] = useState(50);
  const [angle, setAngle] = useState(90);
  const [radialType, setRadialType] = useState("circle");
  const [background, setBackground] = useState(
    `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`
  );

  const gradient = `.gradient {
                      width : 100vw; /*custom your own width*/
                      height : 100vh; /*custom your own height*/
                      background-image : ${background}
                    }`;

  const clicked = (type, num) => {
    setTypeGrad(type);
    getBackground();
  };

  const getBackground = () => {
    let bg = ``;
    if (typeGrad == "radial") {
      bg = `radial-gradient(${radialType} at ${xAxis}% ${yAxis}%, ${color1}, ${color2}, ${color3})`;
      setBackground(bg);
    } else if (typeGrad == "conic") {
      bg = `conic-gradient(from ${angle}deg at ${xAxis}% ${yAxis}%, ${color1}, ${color2}, ${color3})`;
      setBackground(bg);
    } else {
      bg = `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;
      setBackground(bg);
    }
    setBackground(bg);
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
    // alert(value)
  };

  useEffect(() => {
    getBackground();
  }, [typeGrad, xAxis, yAxis, angle, radialType, color1, color2, color3]);

  console.log(color1, color2, color3);
  return (
    <Layout>
      <Text fontSize={"3xl"} fontWeight="bold">
        Gradient Generator
      </Text>
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        <Flex
          align="center"
          zIndex={"-10"}
          // w={{base : 88, md : 96, sm : 88}}
          h={96}
          bg="gray.200"
          rounded={"md"}
          display="grid"
          overflow="hidden"
          justifyContent={"center"}
          alignItems="center"
          border="1px"
          borderColor={"pink.300"}
        >
          <Box
            w={[64, null, 80]}
            h={"60%"}
            display="block"
            overflowX="hidden"
            bg={"pink.300"}
            backgroundImage={background}
            rounded={"xl"}
          ></Box>
        </Flex>
        <GridItem w={"100%"} h="350px">
          <Text textAlign={"center"} fontWeight="semibold">
            Change Below
          </Text>
          <Grid
            templateColumns={"repeat(3, 1fr)"}
            mt={3}
            width={"50%"}
            height={12}
          >
            <Input
              type="color"
              value={color1}
              w={16}
              onChange={(e) => setColor1(e.target.value)}
            />
            <Input
              type="color"
              value={color2}
              w={16}
              onChange={(e) => setColor2(e.target.value)}
            />
            <Input
              type="color"
              value={color3}
              w={16}
              onChange={(e) => setColor3(e.target.value)}
            />
          </Grid>
          <Grid
            templateColumns={"repeat(3, 1fr)"}
            mt={3}
            border={"2px"}
            borderColor={"blue.300"}
            rounded={"full"}
          >
            <Button
              roundedLeft={"full"}
              onClick={() => clicked("radial", 1)}
              bg={typeGrad == "radial" ? "blue.300" : "gray.200"}
              color={typeGrad == "radial" ? "white" : "gray.600"}
              _hover={{ bg: "blue.300", color: "white" }}
            >
              Radial
            </Button>
            <Button
              rounded={"none"}
              onClick={() => clicked("linear", 1)}
              bg={typeGrad == "linear" ? "blue.300" : "gray.200"}
              color={typeGrad == "linear" ? "white" : "gray.600"}
              _hover={{ bg: "blue.300", color: "white" }}
            >
              Linear
            </Button>
            <Button
              roundedRight={"full"}
              onClick={() => clicked("conic", 1)}
              bg={typeGrad == "conic" ? "blue.300" : "gray.200"}
              color={typeGrad == "conic" ? "white" : "gray.600"}
              _hover={{ bg: "blue.300", color: "white" }}
            >
              Conic
            </Button>
          </Grid>
          {typeGrad != "radial" ? (
            <Stack>
              <CustomSlider
                min={0}
                max={360}
                step={15}
                title={"Angle"}
                change={(e) => setAngle(e)}
              />
            </Stack>
          ) : null}
          {typeGrad == "radial" ? (
            <Grid templateColumns={"repeat(2, 1fr)"} gap={4} mt={3} px={5}>
              <Button
                colorScheme="teal"
                variant={radialType == "circle" ? "solid" : "outline"}
                onClick={() => setRadialType("circle")}
              >
                Circle
              </Button>
              <Button
                colorScheme="teal"
                variant={radialType == "ellipse" ? "solid" : "outline"}
                onClick={() => setRadialType("ellipse")}
              >
                Ellipse
              </Button>
            </Grid>
          ) : null}
          {typeGrad != "linear" ? (
            <Stack>
              <CustomSlider
                min={0}
                max={125}
                title={"Center X-axis"}
                change={(e) => setXAxis(e)}
              />
              <CustomSlider
                min={0}
                max={125}
                title={"Center Y-Axis"}
                change={(e) => setYAxis(e)}
              />
            </Stack>
          ) : null}
        </GridItem>
      </SimpleGrid>
      <SimpleGrid columns={[1, null, 2]} spacing="40px" mt="3">
        <Box bg="gray.800" h={"full"} px={5} py={3} mt={3}>
          <Flex
            justifyContent={"space-between"}
            color="blue.300"
            cursor={"pointer"}
          >
            <Text fontSize={"11px"}>HTML</Text>
            <CopyToClipboard text={'<div class="gradient"></div>'}>
              <Icon
                as={MdContentCopy}
                onClick={() => onCopy(`HTML Code Copied`)}
              />
            </CopyToClipboard>
          </Flex>
          <Code
            bg="gray.800"
            color="blue.300"
            fontSize={"11px"}
            mt={3}
            children='<div class="gradient"></div>'
          ></Code>
        </Box>
        <Box bg="gray.800" h={"full"} px={5} py={3} mt={3}>
          <Flex
            justifyContent={"space-between"}
            color="blue.300"
            cursor={"pointer"}
          >
            <Text fontSize={"11px"}>CSS</Text>
            <CopyToClipboard text={gradient}>
              <Icon
                as={MdContentCopy}
                onClick={() => onCopy(`CSS Code Copied`)}
              />
            </CopyToClipboard>
          </Flex>
          <Box display={"flex"} flexDirection={"column"}>
            <Code
              bg="gray.800"
              color="blue.300"
              fontSize={"11px"}
              mt={3}
              children={`.gradient {`}
            ></Code>
            <Code bg="gray.800" color="blue.300" fontSize={"11px"} ml={3}>
              width : 100vw; /*custom your own width*/ <br/> 
              height : 100vh; /*customyour own height*/ <br/> 
              background-image : {background};
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
      </SimpleGrid>
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
    </Layout>
  );
};

export default Gradient;
