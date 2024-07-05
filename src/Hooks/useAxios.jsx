import { SiAxios } from "react-icons/si";

const instance = SiAxios.create({
    baseURL : 'https://pat-match-adoption-server.vercel.app/api/v1'
})
const useAxios = () => {
    return instance
};

export default useAxios;