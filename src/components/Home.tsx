import "./Home.css";

import { useEffect, useState } from "react";
import Donut from "../model/Donut";
import { getDonuts } from "../services/DonutService";
import { Link } from "react-router-dom";
import ResultList from "./ResultList";

const Home = () => {
  const [donuts, setDonuts] = useState<Donut[]>([]);

  useEffect(() => {
    getDonuts().then((response) => {
      setDonuts(response.results);
    });
  }, []);

  console.log(donuts);

  return (
    <div className="Home">
      <ResultList donuts={donuts}></ResultList>
    </div>
  );
};

export default Home;
