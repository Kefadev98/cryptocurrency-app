import React from "react";
import { useGetTotalsQuery } from "../../services/cryptoApi";
import { Box } from "@chakra-ui/react";

type Props = {
  newsCategory: string;
  setNewsCategory: React.Dispatch<React.SetStateAction<string>>;
};

const SelectNews = ({ setNewsCategory, newsCategory }: Props) => {
  const { data } = useGetTotalsQuery(undefined);
  return (
    <Box mt={"55px"}>
      <select
        className="select-news"
        onChange={(e) => {
          setNewsCategory(e.target.value);
        }}
      >
        <option>{newsCategory === "" ? <p>All News</p> : newsCategory}</option>
        {data?.data?.coins?.map((currency: any) => (
          <option value={currency.name} key={currency.name}>
            {currency.name}
          </option>
        ))}
      </select>
    </Box>
  );
};

export default SelectNews;
