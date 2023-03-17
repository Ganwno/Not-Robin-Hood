import React, { useState } from "react";
import Sidebar from "../../UI/Sidebar/Sidebar";
import TopNav from "../../UI/TopNav/TopNav";
import styles from "./Account.module.scss";
import Hero from "../../UI/Hero/Hero";
import FeaturedStock from "../../UI/FeaturedStock/FeaturedStock";
import { fakeData } from "../../../utils/fakeData"; //Temporary Fake Data used for Testing
import Graph from "../../UI/Graph/Graph";
import Filter from "../../UI/Filter/Filter";

// const finnhub = require('finnhub');
// console.log(finnhub);

// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = "cg7p8s9r01qgl488qnh0cg7p8s9r01qgl488qnhg" // Replace this
// const finnhubClient = new finnhub.DefaultApi()

// // Stock candles
// finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
//     console.log(data)
// });

const Account = () => {
  //State Hook for Graph Component
  const [stockData, setStockData] = useState({
    labels: fakeData.map((data) => data.day),
    datasets: [
      {
        label: "Price",
        data: fakeData.map((data) => data.price),
      },
    ],
  });

  return (
    <>
      <Hero style={{ gap: "1rem" }}>
        {/* //! FEATURED STOCKS */}
        <section className={styles.featured}>
          <FeaturedStock status="up" />
          <FeaturedStock status="down" />
          <FeaturedStock status="up" />
          <FeaturedStock status="up" />
        </section>
        {/* //! FILTER SECTION */}
        <section className={styles.filter}>
          <Filter />
        </section>
        {/* //! GRAPH SECTION */}
        <section className={styles.graph}>
          <Graph chartData={stockData} />
        </section>{" "}
      </Hero>
    </>
  );
};

export default Account;