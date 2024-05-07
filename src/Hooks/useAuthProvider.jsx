import { useContext } from "react";
import { AuthContext } from "../Firebase/Auth/AuthProvider";

const useAuthProvider = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuthProvider;