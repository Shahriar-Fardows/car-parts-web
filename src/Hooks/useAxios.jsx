import axios from "axios";

const instance = axios.create({
  // baseURL: "https://carid-project-server-production.up.railway.app/api/v1",
  baseURL: "http://localhost:5000/api/v1",
});
const useAxios = () => {
  return instance;
};

export default useAxios;
