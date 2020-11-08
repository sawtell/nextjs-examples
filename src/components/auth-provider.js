import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(loadUser, 2000);
  }, []);

  /**
   * Load the user from the stored token if there is one.
   *
   * @return {Promise<void>}
   */
  async function loadUser() {
    setLoading(true);
    // If we've got a token then use it to fetch the user from the API
    try {
      const user = await axios.get("/api/auth");
      user && setUser(user.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  /**
   * Logout the user.
   *
   * @return {Promise<void>}
   */
  async function logout() {
    setLoading(true);
    const response = await axios.post("/api/logout");

    if (response.status === 200) {
      setUser(null);
    }
    setLoading(false);
  }

  /**
   * Login the user.
   *
   * @param email
   * @param password
   * @return {Promise<void>}
   */
  async function login(email, password) {
    setLoading(true);
    // call the login
    const response = await axios.post("/api/login", {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      setUser(response.data);
    } else {
      return false;
    }
    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
