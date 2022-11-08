import { useGetExchangesQuery } from "../../services/cryptoApi";
import { Flex, Image, Text, Link, Box, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Helmet } from "react-helmet";
import { Loader } from "../index";

const Exchanges = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetExchangesQuery(coinId);
  const exchangeList = data?.data?.exchanges;
  console.log(exchangeList);

  if (isFetching) return <Loader />;

  return (
    <div>
      <Link href={`/crypto/${coinId}`}>
        <Button fontSize={"1.2rem"}>
          <BiArrowBack />
        </Button>
      </Link>

      <Box w={"90%"} m={"30px"} rounded={"0.5rem"} textAlign={"center"}>
        <Text fontSize={"1.2rem"}>
          This is the place where you can find all exchanges for your
          cryptocurrency. For more information, click on cryptocurrency icon.
        </Text>

        <Flex flexWrap={"wrap"} mt={"20px"} justifyContent={"center"}>
          {exchangeList?.map((exchange: any) => (
            <Link href={exchange?.coinrankingUrl} key={exchange?.uuid}>
              <Flex
                w={"120px"}
                h={"120px"}
                m={"25px"}
                alignItems={"center"}
                justifyContent={"center"}
                direction={"column"}
              >
                <Image
                  alt="exchange"
                  src={exchange?.iconUrl}
                  m={"10px"}
                  boxSize={"60px"}
                />
                <Text fontWeight={"bold"} fontSize={"0.9rem"}>
                  {exchange?.rank}.{exchange?.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
        <Helmet>
          <title>Exchanges</title>
          <meta name="description" content="Exchanges for cryptocurrencies" />
          <meta name="keywords" content="Crypto" />
        </Helmet>
      </Box>
    </div>
  );
};

export default Exchanges;
