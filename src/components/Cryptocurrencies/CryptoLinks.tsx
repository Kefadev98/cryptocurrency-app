import { Flex, Box, Text, Link } from "@chakra-ui/react";

type Props = {
  type: string;
  name: string;
  url: string;
};

const CryptoLinks = ({ type, name, url }: Props) => {
  return (
    <div>
      <Box w={"100%"} h={"70px"}>
        <Flex
          w={"100%"}
          h={"40px"}
          justifyContent={"space-between"}
          my={"10px"}
          borderBottom={"2px solid #CBD5E0"}
        >
          <Text
            textTransform={"capitalize"}
            fontWeight={"bold"}
            color={"#292e36"}
          >
            {type}
          </Text>
          <Link
            href={url}
            rel="noreferrer"
            fontWeight={"bold"}
            color={"#4299E1"}
          >
            {name}
          </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default CryptoLinks;
