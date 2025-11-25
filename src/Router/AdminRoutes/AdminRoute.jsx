import React from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import Loading from "../../Loading/Loading";
import UseRole from "../../Hooks/userRole/UseRole";
import Forbidden from "../../Components/Forbidden/Forbidden";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { roleLoading, role } = UseRole();
  if (loading || roleLoading) {
    return <Loading></Loading>;
  }
  if (role !== "admin") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default AdminRoute;
