import { Navigate } from "react-router-dom";
import useAuthProvider from "../Hooks/useAuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuthProvider();

    if(loading) {
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;