import {
  Text,
  Image,
  Menu,
  MenuItem,
  Box,
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../images/cryptocurrency.png";
import { AiOutlineHome, AiOutlineFund } from "react-icons/ai";
import { BiNews, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isSmallerThan1000] = useMediaQuery(["(max-width: 1000px)"]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Box>
          <Button
            position={"fixed"}
            right={"0"}
            m={"8px"}
            fontSize={"1.2rem"}
            onClick={onOpen}
          >
            <BiMenu />
          </Button>
          <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg={"rgb(0, 21, 41)"}>
              <DrawerHeader borderBottomWidth="1px">
                <Flex>
                  <Image src={logo} alt="crypto" w={"50px"} mr={"20px"} />
                  <Text fontSize={"3xl"} color={"#00A3C4"}>
                    Cryptoverse
                  </Text>
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <Menu>
                  <NavLink to="/">
                    <MenuItem
                      icon={<AiOutlineHome />}
                      my={"20px"}
                      color={"#FFFFFF"}
                      _focus={{ color: "#4299E1", fontWeight: "bold" }}
                      onClick={onClose}
                    >
                      Homepage
                    </MenuItem>
                  </NavLink>
                  <NavLink to="/cryptocurrencies">
                    <MenuItem
                      icon={<AiOutlineFund />}
                      color={"#FFFFFF"}
                      my={"20px"}
                      _focus={{ color: "#4299E1", fontWeight: "bold" }}
                      onClick={onClose}
                    >
                      Cryptocurrencies
                    </MenuItem>
                  </NavLink>
                  <NavLink to="/news">
                    <MenuItem
                      icon={<BiNews />}
                      color={"#FFFFFF"}
                      my={"20px"}
                      _focus={{ color: "#4299E1", fontWeight: "bold" }}
                      onClick={onClose}
                    >
                      News
                    </MenuItem>
                  </NavLink>
                </Menu>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      )}
    </div>
  );
};

export default Navbar;
