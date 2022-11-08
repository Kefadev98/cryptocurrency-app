import { Text, Image, Menu, MenuItem, Box, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../images/cryptocurrency.png";
import { AiOutlineHome, AiOutlineFund } from "react-icons/ai";
import { BiNews } from "react-icons/bi";

const Navbar = () => {
  const [isSmallerThan1000] = useMediaQuery(["(max-width: 1000px)"]);

  return (
    <div>
      {!isSmallerThan1000 ? (
        <Box w={"400px"} bg={"rgb(0, 21, 41)"} minHeight={"100vh"}>
          <Flex alignItems={"center"} justify={"center"} pt={"20px"}>
            <Image src={logo} alt="crypto" w={"50px"} mr={"20px"} />
            {/* <Avatar /> */}
            <Text fontSize={"3xl"} color={"#00A3C4"}>
              <NavLink to="/">Cryptoverse</NavLink>
            </Text>
          </Flex>
          <Box mt={"30px"} fontSize={"1.2rem"} lineHeight={"3rem"}>
            <Menu>
              <NavLink to="/">
                <MenuItem
                  icon={<AiOutlineHome />}
                  pl={"30px"}
                  color={"#FFFFFF"}
                  _focus={{ color: "#4299E1", fontWeight: "bold" }}
                >
                  Homepage
                </MenuItem>
              </NavLink>
              <NavLink to="/cryptocurrencies">
                <MenuItem
                  icon={<AiOutlineFund />}
                  pl={"30px"}
                  color={"#FFFFFF"}
                  _focus={{ color: "#4299E1", fontWeight: "bold" }}
                >
                  Cryptocurrencies
                </MenuItem>
              </NavLink>
              <NavLink to="/news">
                <MenuItem
                  icon={<BiNews />}
                  pl={"30px"}
                  color={"#FFFFFF"}
                  _focus={{ color: "#4299E1", fontWeight: "bold" }}
                >
                  News
                </MenuItem>
              </NavLink>
            </Menu>
          </Box>
        </Box>
      ) : (
        <Box w={"70px"} minHeight={"100vh"} bg={"rgb(0, 21, 41)"} h={"100%"}>
          <Flex alignItems={"center"} justify={"center"} pt={"20px"}>
            <Image src={logo} alt="crypto" w={"50px"} />
          </Flex>
          <Box mt={"30px"} fontSize={"1.2rem"} lineHeight={"3rem"}>
            <Menu>
              <NavLink to="/">
                <MenuItem
                  icon={<AiOutlineHome />}
                  ml={"10px"}
                  fontSize={"2rem"}
                  color={"#FFFFFF"}
                  py={"20px"}
                />
              </NavLink>
              <NavLink to="/cryptocurrencies">
                <MenuItem
                  icon={<AiOutlineFund />}
                  ml={"10px"}
                  fontSize={"2rem"}
                  color={"#FFFFFF"}
                  py={"20px"}
                />
              </NavLink>

              <NavLink to="/news">
                <MenuItem
                  icon={<BiNews />}
                  ml={"10px"}
                  fontSize={"2rem"}
                  color={"#FFFFFF"}
                  py={"20px"}
                />
              </NavLink>
            </Menu>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Navbar;
