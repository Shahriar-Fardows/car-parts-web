import { useContext } from "react";
import { Context } from "../Context/AuthContext";

const useAuthProvider = () => {
    const auth = useContext(Context);
    return auth;
};

export default useAuthProvider;