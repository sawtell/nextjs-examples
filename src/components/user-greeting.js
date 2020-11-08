import React from "react";
import { useAuth } from "./auth-provider";

const UserGreeting = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <h3>Hi there, {user.username}</h3>
      <p>This is some content personalised to you!</p>
      <div>
        <a
          style={{ textDecoration: "underline" }}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default UserGreeting;
