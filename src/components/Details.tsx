import { useEffect } from "react";
import Result from "../model/Donut";
import { getDonutById } from "../services/DonutService";
import "./Details.css";

const Details = () => {
  useEffect(() => {
    getDonutById(1);
  }, []);

  return <div className="Details">Details works</div>;
};

export default Details;
