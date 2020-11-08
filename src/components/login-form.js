import React, { useState } from "react";
import { useAuth } from "./auth-provider";
import styles from "../../styles/Form.module.css";

const LoginForm = () => {
  const { login } = useAuth();
  const [values, setValues] = useState({});

  function handleChange(event) {
    const field = event.currentTarget.attributes.name.value;
    values[field] = event.currentTarget.value;
    setValues(values);
  }

  async function handleSubmit() {
    login(values.email, values.password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <label className={styles.label}>Email:</label>
        <input name="email" type="text" onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.label}>Password:</label>
        <input name="password" type="password" onChange={handleChange} />
      </div>

      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginForm;
