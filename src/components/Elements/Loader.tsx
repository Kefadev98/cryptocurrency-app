import { Flex } from "@chakra-ui/react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <Flex
      position={"fixed"}
      inset={"0"}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={"10"}
      bg={"rgba(0,0,0,.6)"}
    >
      <ClipLoader color={"#4299E1"} size={100} />
    </Flex>
  );
};

export default Loader;
