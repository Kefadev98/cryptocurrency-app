import { useParams, Link } from "react-router-dom";
import "../../App.css";
import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { BiHash, BiDollar, BiTrophy, BiArrowBack } from "react-icons/bi";
import millify from "millify";
import { CryptoLinks, Loader } from "../index";
import HTMLReactParser from "html-react-parser";
import { Helmet } from "react-helmet";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);

  const cryptoDetail: any = data?.data?.coin;
  console.log(cryptoDetail);

  if (isFetching) return <Loader />;

  return (
    <Box>
      <Link to="/cryptocurrencies">
        <Button fontSize={"1.2rem"} m={"8px"}>
          <BiArrowBack />
        </Button>
      </Link>

      <Flex flexWrap={"wrap"} justifyContent={"center"}>
        <Box w={"70%"} textAlign={"center"} borderBottom={"1px solid #CBD5E0"}>
          <Heading fontSize={"3xl"} color={"#4299E1"} my={"30px"}>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={cryptoDetail?.iconUrl}
                alt="image"
                boxSize={"100px"}
              />
              {cryptoDetail?.name}
            </Flex>
          </Heading>
          <Text mb={"20px"}>
            {cryptoDetail?.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </Text>
          {/*Link to Exchanges component*/}
          <Link to={`/coin/${coinId}/exchanges`}>
            <Button colorScheme="blue" size="lg">
              Exchanges
            </Button>
          </Link>

          <Box w={"100%"} h={"70px"} mb={"150px"}>
            <Flex
              w={"100%"}
              h={"40px"}
              justifyContent={"space-between"}
              my={"20px"}
              borderBottom={"2px solid #CBD5E0"}
            >
              <Text fontSize={"1.1rem"} fontWeight={"bold"} color={"#4A5568"}>
                <Flex alignItems={"center"}>
                  <BiDollar /> Price
                </Flex>
              </Text>

              <Text fontSize={"1.1rem"} fontWeight={"bold"} color={"#4A5568"}>
                {millify(cryptoDetail?.price)}
              </Text>
            </Flex>
            <Flex
              w={"100%"}
              h={"40px"}
              justifyContent={"space-between"}
              my={"20px"}
              borderBottom={"2px solid #CBD5E0"}
            >
              <Text fontSize={"1.1rem"} fontWeight={"bold"} color={"#4A5568"}>
                <Flex alignItems={"center"}>
                  <BiHash /> Rank
                </Flex>
              </Text>
              <Text fontSize={"1.1rem"} fontWeight={"bold"} color={"#4A5568"}>
                {cryptoDetail?.rank}
              </Text>
            </Flex>
            <Flex
              w={"100%"}
              h={"40px"}
              justifyContent={"space-between"}
              my={"20px"}
              borderBottom={"2px solid #CBD5E0"}
            >
              <Text fontSize={"1.1rem"} fontWeight={"bold"} color={"#4A5568"}>
                <Flex alignItems={"center"}>
                  <BiDollar /> MarketCap
                </Flex>
              </Text>
              <Text fontSize={"1.1rem"} fontWeight={"bold"} color={"#4A5568"}>
                {millify(cryptoDetail?.marketCap)}
              </Text>
            </Flex>
            <Flex
              w={"100%"}
              h={"40px"}
              justifyContent={"space-between"}
              my={"20px"}
              borderBottom={"2px solid #CBD5E0"}
            >
              <Text fontSize={"1.1rem"} fontWeight={"bold"} color={"#4A5568"}>
                <Flex alignItems={"center"}>
                  <BiTrophy /> All-time-high
                </Flex>
              </Text>
              <Text fontSize={"1.1rem"} fontWeight={"bold"} color={"#4A5568"}>
                {millify(cryptoDetail?.allTimeHigh?.price)}
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box w={"70%"}>
          <Heading color={"#4299E1"} my={"20px"}>
            What is {cryptoDetail?.name}?
          </Heading>
          <Text className="coin-details">
            {HTMLReactParser(cryptoDetail?.description)}
          </Text>
        </Box>
        <Box w={"70%"}>
          <Heading my={"20px"} color={"#4A5568"}>
            {cryptoDetail?.name} Links
          </Heading>
          {/*CryptoLinks component*/}
          {cryptoDetail?.links?.map((link: any) => (
            <CryptoLinks
              key={link.url}
              type={link.type}
              name={link.name}
              url={link.url}
            />
          ))}
        </Box>
        {/*React Helmet*/}
        <Helmet>
          <title>{cryptoDetail?.name}</title>
          <meta
            name="description"
            content="Get info for all your favorites cryptocurrencies"
          />
          <meta name="keywords" content="Crypto" />
        </Helmet>
      </Flex>
    </Box>
  );
};

export default CryptoDetails;
