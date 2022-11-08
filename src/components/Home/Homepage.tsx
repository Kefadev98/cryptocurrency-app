import { SimpleGrid, Box, Text, Heading, Flex } from "@chakra-ui/react";
import { useGetTotalsQuery } from "../../services/cryptoApi";
import { Link } from "react-router-dom";
import millify from "millify";
import { Helmet } from "react-helmet";
import { News, TopCryptocurrencies, Loader } from "../index";

const Homepage = () => {
  const { data, isFetching } = useGetTotalsQuery(undefined);
  console.log(data);

  const globalStats: any = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <Box mt={"20px"}>
      <Heading
        my={"20px"}
        fontSize={"3xl"}
        color={"#1A365D"}
        fontWeight={"bold"}
        pl={"10px"}
      >
        Global Crypto Stats
      </Heading>
      <SimpleGrid
        columns={2}
        spacing={10}
        fontSize={"1.2rem"}
        boxShadow="xl"
        p={"20px"}
      >
        <Box height="80px">
          <Text color={"#718096"}>Total Cryptocurrencies</Text>
          <Text fontSize={"1.5rem"}>{millify(globalStats?.total)}</Text>
        </Box>
        <Box height="80px">
          <Text color={"#718096"}>Total Market Cap</Text>
          <Text fontSize={"1.5rem"}>
            {millify(globalStats?.totalMarketCap)}
          </Text>
        </Box>
        <Box height="80px">
          <Text color={"#718096"}>Total Markets</Text>
          <Text fontSize={"1.5rem"}>{millify(globalStats?.totalMarkets)}</Text>
        </Box>
        <Box height="80px">
          <Text color={"#718096"}>Total Exchanges</Text>
          <Text fontSize={"1.5rem"}>{globalStats?.totalExchanges}</Text>
        </Box>
        <Box height="80px">
          <Text color={"#718096"}>Total 24h Volume</Text>
          <Text fontSize={"1.5rem"}>
            {millify(globalStats?.total24hVolume)}
          </Text>
        </Box>
      </SimpleGrid>
      {/*Cryptocurrencies component*/}
      <div>
        <Flex justifyContent={"space-between"} my={"30px"}>
          <Heading
            fontWeight={"bold"}
            color={"#1A365D"}
            fontSize={"3xl"}
            ml={"20px"}
          >
            Top Cryptocurrencies
          </Heading>
          <Link to="/cryptocurrencies">
            <Text
              fontWeight={"semi-bold"}
              color={"#3182CE"}
              mr={"30px"}
              mt={"10px"}
              fontSize={"1.1rem"}
            >
              Show More...
            </Text>
          </Link>
        </Flex>
      </div>
      <TopCryptocurrencies />
      {/*News component*/}
      <div>
        <Flex justifyContent={"space-between"} my={"30px"}>
          <Heading
            fontWeight={"bold"}
            color={"#1A365D"}
            fontSize={"3xl"}
            ml={"20px"}
          >
            Latest Crypto News
          </Heading>
          <Link to="/news">
            <Text
              fontWeight={"semi-bold"}
              color={"#3182CE"}
              mr={"30px"}
              mt={"10px"}
              fontSize={"1.1rem"}
            >
              Show More...
            </Text>
          </Link>
        </Flex>
      </div>
      <News simplified={true} />

      <Box>
        <Helmet>
          <title>Cryptoverse</title>
          <meta
            name="description"
            content="Get info for all your favorites cryptocurrencies"
          />
          <meta name="keywords" content="Crypto" />
        </Helmet>
      </Box>
    </Box>
  );
};

export default Homepage;
