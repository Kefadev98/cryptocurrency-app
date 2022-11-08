import "./App.css";
import theme from "./theme/theme";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components/index";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Box display={"flex"} bg={"rgb(0, 21, 41)"} minHeight={"100vh"}>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/coin/:coinId/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News simplified={false} />} />
          </Routes>
        </div>
      </Box>
    </Router>
  </ChakraProvider>
);
