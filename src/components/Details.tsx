import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Result from "../model/Donut";
import SingleDonut from "../model/SingleDonutResponse";
import { getDonutById } from "../services/DonutService";
import "./Details.css";

const Details = () => {
  const [searchParams] = useSearchParams();
  const [donut, setDonut] = useState<SingleDonut>();
  const { id } = useParams();

  useEffect(() => {
    getDonutById(id).then((response) => {
      setDonut(response);
    });
  }, []);

  return (
    <div className="Details">
      {donut ? <p>{donut.id}</p> : <p>Not found</p>}
    </div>
  );
};

export default Details;
