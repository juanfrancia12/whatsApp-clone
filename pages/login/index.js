import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { Alert } from "antd";

import styles from "../../styles/Login.module.scss";
import ModalForgotPassword from "../../components/AppLayout/ModalForgotPassword";

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();

  const OnSubmitLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "" || password === "") {
      setIsError(true);
      return;
    }

    setIsError(false);
    sessionStorage.setItem("user", email);
    console.log("Vehículo almacenado: ", sessionStorage.getItem("user"));
    router.push("/");
  };

  const onCloseError = (e) => {
    setIsError(false);
    console.log(e, "I was closed.");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Head>
        <title>Login | Clone WhatsApp</title>
        <meta name="description" content="Creating a whatsapp clone" />
        <link rel="icon" href="/images/whatsapp-logo.png" />
      </Head>
      <section className={styles.section_login}>
        <div className={styles.container}>
          <div className={styles.title}>
            <span>🔒</span>
            Sign in
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
              OnSubmitLogin(event);
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
            <button type="submit" className={styles.button}>
              SIGN IN
            </button>
          </form>
          <div className={styles.forgot_register}>
            <a onClick={() => showModal()}>Forgot password ?</a>
            <Link href="/register">
              <a>Don{`'`}t have an account? Sign Up</a>
            </Link>
          </div>
        </div>
      </section>
      <ModalForgotPassword
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

const index = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default index;
