import React from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import UseRole from "../../Hooks/userRole/UseRole";
import Loading from "../../Loading/Loading";
import Forbidden from "../../Components/Forbidden/Forbidden";

const RiderRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const { role, roleLoading } = UseRole();
  if (loading || !user || roleLoading) {
    return <Loading></Loading>;
  }
  if (role !== "rider") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default RiderRoute;
