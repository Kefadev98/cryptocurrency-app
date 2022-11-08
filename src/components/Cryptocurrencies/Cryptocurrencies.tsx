import { useState } from "react";
import millify from "millify";
import { useGetTotalsQuery } from "../../services/cryptoApi";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CryptoSearch, Loader } from "../index";
import { Helmet } from "react-helmet";

const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetTotalsQuery(undefined);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  return (
    <div>
      {/*CryptoSearch component*/}
      <CryptoSearch cryptosList={cryptosList} setCryptos={setCryptos} />
      <Flex flexWrap={"wrap"} mt={"20px"} justifyContent={"center"}>
        {isFetching && <Loader />}
        {cryptos?.map((currency: any) => (
          <Box key={currency.uuid} m={"30px"}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Box
                w={"300px"}
                h={"270px"}
                bg={"#EDF2F7"}
                boxShadow="xl"
                _hover={{
                  boxShadow: "dark-lg",
                  transition: "0.1s ease-in-out",
                }}
              >
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  borderBottom={"1px solid #CBD5E0"}
                  ml={"20px"}
                  py={"5px"}
                  w={"90%"}
                >
                  <Text fontWeight={"bold"} mt={"10px"}>
                    {currency.rank}.{currency.name}
                  </Text>

                  <Image
                    src={currency.iconUrl}
                    alt="icon"
                    boxSize="50px"
                    mt={"10px"}
                    mr={"10px"}
                  />
                </Flex>
                <Box m={"20px 0 0 20px"} lineHeight={"2.5rem"}>
                  <Text>Price: {millify(currency.price)}</Text>
                  <Text>Market Cap: {millify(currency.marketCap)} </Text>
                  <Text>Change: {millify(currency.change)}</Text>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
        <Helmet>
          <title>Cryptocurrencies</title>
          <meta
            name="description"
            content="Get info for all your favorites cryptocurrencies"
          />
          <meta name="keywords" content="Crypto" />
        </Helmet>
      </Flex>
    </div>
  );
};

export default Cryptocurrencies;
