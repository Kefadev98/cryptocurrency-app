import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { cryptoDetails, totalStats } from "../types/cryptoTypes";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "143583aae9mshc6da8b142735fb5p1a57d7jsna72d6d4ef84b",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const BASE_URL = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: any) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTotals: builder.query<totalStats, undefined>({
      query: () => createRequest("/coins"),
    }),
    getCryptoDetails: builder.query<cryptoDetails, any>({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getExchanges: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}/exchanges`),
    }),
  }),
});

export const {
  useGetTotalsQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
} = cryptoApi;
