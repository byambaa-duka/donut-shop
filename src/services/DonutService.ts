import axios from "axios";
import DonutResponse from "../model/DonutResponse";
import SingleDonut from "../model/SingleDonutResponse";

export const getDonuts = (): Promise<DonutResponse> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json", {})
    .then((response) => {
      return response.data;
    });
};

export const getDonutById = (id: string | undefined): Promise<SingleDonut> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts/" + id + ".json")
    .then((response) => {
      return response.data;
    });
};
