import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
const useAxios = () => {
  return instance;
};

export default useAxios;
