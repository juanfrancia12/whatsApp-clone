import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Alert } from "antd";

import styles from "../../styles/Login.module.scss";

export const Register = () => {
  const [isError, setIsError] = useState(false);

  function OnSubmitRegister(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmpassword = event.target.confirmpassword.value;

    if (email === "" || password === "" || confirmpassword === "") {
      setIsError(true);
      return;
    }

    if (password !== confirmpassword) {
      setIsError(true);
      return;
    }

    setIsError(false);
    alert(`${email}, ${password}, ${confirmpassword}`);
  }

  const onCloseError = (e) => {
    setIsError(false);
    console.log(e, "I was closed.");
  };

  return (
    <>
      <Head>
        <title>Register | Clone WhatsApp</title>
        <meta name="description" content="Creating a whatsapp clone" />
        <link rel="icon" href="/images/whatsapp-logo.png" />
      </Head>
      <section className={styles.section_login}>
        <div className={styles.container}>
          <div className={styles.title}>
            <span>🔒</span>
            Sign up
          </div>
          {isError && (
            <Alert
              message="Please fill in all the required fields."
              type="error"
              closable
              onClose={() => onCloseError()}
            />
          )}
          <form
            className={styles.form}
            onSubmit={(event) => {
              OnSubmitRegister(event);
            }}
          >
            <label htmlFor="email">
              NickName or Email <span>*</span>{" "}
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Write NickName or Email Adress"
              className={isError === true ? styles.error : styles.success}
            />
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Write Password"
              className={isError === true ? styles.error : styles.success}
            />
            <label htmlFor="confirmpassword">
              Confirm password <span>*</span>
            </label>
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="Write confirm Password"
              className={isError === true ? styles.error : styles.success}
            />
            <button type="submit" className={styles.button}>
              SIGN UP
            </button>
          </form>
          <div className={styles.forgot_register}>
            <div></div>
            <Link href="/login">
              <a>Already have a account? Sign in</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const index = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default index;
{
  /* <Link>
            <a>Forgot password ?</a>
          </Link> */
}
