export type totalStats = {
  data: {
    stats: {
      total: number;
      total24hVolume: string;
      totalExchanges: number;
      totalMarketCap: string;
      totalMarkets: number;
    };
    coins: {
      [key: string]: any;
      uuid: string;
      rank: number;
      name: string;
      iconUrl: string;
      price: string;
      marketCap: string;
      change: string;
    };
  };
};

export type cryptoNewsType = {
  value: {
    [key: string]: any;
    datePublished: string;
    description: string;
    name: string;
    url: string;
    image: {
      thumbnail: {
        contentUrl: string;
      };
    };
  };
};

export type cryptoDetails = {
  data: {
    coin: {
      name: string;
      iconUrl: string;
      price: string;
      rank: number;
      marketCap: string;
      websiteUrl: string;
      allTimeHigh: {
        price: string;
      };
      links: {
        name: string;
        type: string;
        url: string;
      };
    };
  };
};
