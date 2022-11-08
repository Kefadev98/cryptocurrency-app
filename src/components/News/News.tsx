import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { Flex, Text, Image, Link } from "@chakra-ui/react";
import { useState } from "react";
import Moment from "react-moment";
import "../../App.css";
import { Loader, SelectNews } from "../index";
import { Helmet } from "react-helmet";

type Props = {
  simplified: boolean;
};

const News = ({ simplified }: Props) => {
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  //Select news for specific cryptocurrency
  const [newsCategory, setNewsCategory] = useState<string>("");
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 8 : 50,
  });
  console.log(newsCategory);

  if (isFetching) return <Loader />;

  return (
    <div>
      {!simplified && (
        <SelectNews
          setNewsCategory={setNewsCategory}
          newsCategory={newsCategory}
        />
      )}
      <Flex flexWrap={"wrap"} mt={"20px"} justifyContent={"center"}>
        {cryptoNews?.value?.map((news: any) => (
          <Link href={news.url} key={news.name}>
            <Flex
              m={"30px"}
              w={"300px"}
              h={"300px"}
              bg={"#EDF2F7"}
              border={"1px solid #A0AEC0"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              rounded={"md"}
              boxShadow="xl"
              _hover={{
                boxShadow: "dark-lg",
                transition: "0.2s ease-in-out",
              }}
            >
              <Flex
                borderBottom={"1px solid #CBD5E0"}
                w={"100%"}
                justifyContent={"space-between"}
              >
                <Text fontWeight={"bold"} fontSize={"sm"} m={"10px"}>
                  {news.name}
                </Text>
                <Image
                  src={news.image?.thumbnail?.contentUrl}
                  alt="news"
                  boxSize="80px"
                  p={"8px"}
                  rounded={"2xl"}
                />
              </Flex>
              <Text fontSize={"sm"} m={"10px 0 10px 10px"}>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </Text>

              <Text ml={"10px"}>
                <Moment format="h" trim durationFromNow>
                  {news.datePublished}
                </Moment>{" "}
                hours ago
              </Text>
              <Flex justifyContent={"space-between"} m={"10px"}>
                <Image
                  src={
                    news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                  }
                  boxSize="30px"
                  alt="news"
                />

                <Text
                  className="provider-name"
                  fontWeight={"semibold"}
                  fontSize={"sm"}
                >
                  {news.provider[0]?.name}
                </Text>
              </Flex>
            </Flex>
          </Link>
        ))}
        {!simplified && (
          <Helmet>
            <title>News</title>
            <meta
              name="description"
              content="Get info for all your favorites cryptocurrencies"
            />
            <meta name="keywords" content="Crypto" />
          </Helmet>
        )}
      </Flex>
    </div>
  );
};

export default News;
