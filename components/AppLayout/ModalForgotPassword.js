import { useState } from "react";
import { Button, Modal } from "antd";
import { Alert, Space } from "antd";

import styles from "../../styles/ForgotPassword.module.scss";

const ModalForgotPassword = ({ isModalVisible, setIsModalVisible }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [txtBtn, setTxtBtn] = useState("Accept");

  const handleOk = () => {
    if (txtBtn === "Ok") {
      setIsModalVisible(false);
      setIsError(false);
      setIsSuccess(false);
      setEmail("");
      setTxtBtn("Accept");
      return;
    }

    setConfirmLoading(true);
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(email)) {
      setTimeout(() => {
        // setIsModalVisible(false);
        setIsError(false);
        setIsSuccess(true);
        setConfirmLoading(false);
        setTxtBtn("Ok");
        return;
      }, 2000);
    } else {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(true);
        setConfirmLoading(false);
        return;
      }, 2000);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCloseAlert = () => {
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <Modal
      title="Forgot password"
      visible={isModalVisible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={confirmLoading}
          onClick={() => handleOk()}
        >
          {txtBtn}
        </Button>,
      ]}
    >
      <Space direction="vertical" size="small">
        <p>
          To recover the password, you must enter your email. We will send you a
          verification email. {email}
        </p>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <input
            type="email"
            name="email"
            placeholder="Write email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={isError ? styles.input_error : styles.input_success}
          />
          {isError && (
            <Alert
              message="Please fill in all the required fields."
              type="error"
              closable
              onClose={() => onCloseAlert()}
            />
          )}
          {isSuccess && (
            <Alert
              message="A verification email has been sent to you."
              type="success"
              closable
              onClose={() => onCloseAlert()}
            />
          )}
        </Space>
      </Space>
    </Modal>
  );
};

export default ModalForgotPassword;
