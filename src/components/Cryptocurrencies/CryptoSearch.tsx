import { useEffect, useState } from "react";
import { useMediaQuery, Flex, Text, Input } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { totalStats } from "../../types/cryptoTypes";

type Props = {
  cryptosList: totalStats | undefined;
  setCryptos: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: any;
          uuid: string;
          rank: number;
          name: string;
          iconUrl: string;
          price: string;
          marketCap: string;
          change: string;
        }
      | undefined
    >
  >;
};

const CryptoSearch = ({ cryptosList, setCryptos }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  //Media query for Search bar
  const [isSmallerThan900] = useMediaQuery(["(max-width: 900px)"]);

  useEffect(() => {
    //Filter cryptosList from useGetTotalsQuery by name
    const filteredData = cryptosList?.data?.coins.filter((coin: any) =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(filteredData);
    // eslint-disable-next-line
  }, [searchTerm, cryptosList]);

  return (
    <div>
      <Flex w={"90%"} m={"50px 0 0 5%"} alignItems={"center"}>
        {!isSmallerThan900 ? (
          <Text fontSize={"1.5rem"} mr={"10px"}>
            <BiSearch />
          </Text>
        ) : (
          ""
        )}
        <Input
          placeholder="Search Cryptocurrency..."
          _placeholder={{ color: "#718096" }}
          bg={"white"}
          color={"black"}
          boxShadow={"xl"}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Flex>
    </div>
  );
};

export default CryptoSearch;
