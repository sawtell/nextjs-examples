import React from "react";
import { useAuth } from "components/auth-provider";
import LoginForm from "components/login-form";

const Protected = ({ children }) => {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (!authenticated) {
    return <LoginForm />;
  }
  return <>{children}</>;
};

export default Protected;
