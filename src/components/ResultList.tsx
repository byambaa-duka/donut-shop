import { Link } from "react-router-dom";
import Result from "../model/Donut";
import Details from "./Details";
import "./ResultList.css";

interface Props {
  donuts: Result[];
}

const ResultList = ({ donuts }: Props) => {
  return (
    <div className="ResultList">
      <ul>
        {donuts.map((donut) => (
          <Link to={`/donuts/${donut.id}`}>
            <li>{donut.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
