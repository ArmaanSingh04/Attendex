import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Loader from "../Loader/Loader.component";

const Privateroutes = () => {
  const { auth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default Privateroutes;