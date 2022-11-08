import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { cryptoNewsType } from "../types/cryptoTypes";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "143583aae9mshc6da8b142735fb5p1a57d7jsna72d6d4ef84b",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const BASE_URL = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url: any) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<cryptoNewsType, any>({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
