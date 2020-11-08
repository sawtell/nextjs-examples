import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Protected from "components/protected";
import UserGreeting from "../src/components/user-greeting";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Authentication in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Authentication example</h1>

        <div className={styles.description}>
          <p>
            This example makes use of a an authentication context and associated
            provider in order to protect specific parts of the site.
          </p>
          <p>
            The example content below is only visible for logged in users. Try
            it out with the following credentials
          </p>
          <ul>
            <li>
              <code>test@example.com</code>
            </li>
            <li>
              <code>password</code>
            </li>
          </ul>
        </div>

        <div style={{ background: "#eeeeee", padding: "2rem" }}>
          <Protected>
            <UserGreeting />
          </Protected>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
