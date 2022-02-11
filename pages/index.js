import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ScrollToBottom from "react-scroll-to-bottom";
import { MdAddPhotoAlternate } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FaEllipsisV, FaDownload, FaSearch } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import {
  MdKeyboardVoice,
  MdSettingsVoice,
  MdMessage,
  MdGroup,
} from "react-icons/md";
import {
  BsEmojiLaughing,
  BsFillEmojiLaughingFill,
  BsPlusLg,
} from "react-icons/bs";
import { Login } from "../components/AppLayout/Login";
import { Register } from "../components/AppLayout/Register";
import { Content } from "../components/AppLayout/Content";
// import Layout from "../components/Layout";
// import styles from "../styles/Home.module.scss";

const nameUser = "Alexa Smith";

const dataMessage = [
  {
    id: 1,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "Hello",
  },
  {
    id: 2,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "How are you?",
  },
  {
    id: 3,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "Good, thanks. Nice",
  },
  {
    id: 4,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "How you use whatsapp?",
  },
  ,
  {
    id: 5,
    to: "Zack Martin",
    from: "Alexa Smith",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "Yes, thanks",
  },
  {
    id: 6,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "Hello",
  },
  {
    id: 7,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "How are you?",
  },
  {
    id: 8,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "Good, thanks. Nice",
  },
  {
    id: 9,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "How you use whatsapp?",
  },
  ,
  {
    id: 10,
    to: "Zack Martin",
    from: "Alexa Smith",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "Yes, thanks",
  },
  {
    id: 11,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "Hello",
  },
  {
    id: 12,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "How are you?",
  },
  {
    id: 13,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "Good, thanks. Nice",
  },
  {
    id: 14,
    to: "Alexa Smith",
    from: "Zack Martin",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "How you use whatsapp?",
  },
  ,
  {
    id: 15,
    to: "Zack Martin",
    from: "Alexa Smith",
    date: "Mon, 12 Apr 2021 17:00:59 GMT",
    message: "Yes, thanks",
  },
];

export default function Home() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [tabsMessage, setTabsMessage] = useState(1);

  const scrollToBottom = () => {
    const divme = document.querySelector(".card-message-content");
    divme.scrollTop = divme.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  });

  const toggleTabs = (index) => {
    setTabsMessage(index);
  };

  const onSendClick = () => {
    if (currentMessage.trim() !== "") {
      console.log(currentMessage);
      dataMessage.push({
        id: dataMessage.length + 1,
        to: "Alexa Smith",
        message: currentMessage,
      });
    } else {
      alert("ingrese texto");
    }
    setCurrentMessage("");
  };

  return (
    <>
      <Head>
        <title>Clone WhatsApp</title>
        <meta name="description" content="Creating a whatsapp clone" />
        <link rel="icon" href="/images/whatsapp-logo.png" />
      </Head>
      <main className="section-whatsapp">
        <section className="container-content">
          <div className="card-view">
            <div className="card-view-user">
              <div className="view-info-user">
                <div className="user-avatar">
                  <Image
                    src="/images/user3.jpg"
                    alt="User imagen"
                    width={250}
                    height={250}
                    className="user-img"
                  />
                </div>
                <span>Alexa Smith</span>
              </div>
              <div className="head-icon-action">
                <FaDownload size={23} color={"gray"} />
                <FiLogOut size={23} color={"gray"} />
              </div>
            </div>
            <div className="card-view-search">
              <div className="input-search">
                <input
                  // value={currentMessage}
                  type="text"
                  placeholder="Type a contact"
                  // onChange={(event) => {
                  //   setCurrentMessage(event.target.value);
                  // }}
                  // onKeyPress={(event) => {
                  //   event.key === "Enter" && onSendClick();
                  // }}
                />
                <FaSearch size={25} color={"gray"} className="icon-search" />
              </div>
            </div>
            <div className="card-view-chats">
              <div className="card-tabs-content">
                <div className="items-tabs">
                  <button
                    className={tabsMessage === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTabs(1)}
                  >
                    <AiFillHome
                      size={25}
                      color={"gray"}
                      className="icon-search"
                    />
                  </button>
                  <button
                    className={tabsMessage === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTabs(2)}
                  >
                    <MdMessage
                      size={25}
                      color={"gray"}
                      className="icon-search"
                    />
                  </button>
                  <button
                    className={tabsMessage === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTabs(3)}
                  >
                    <MdGroup size={25} color={"gray"} className="icon-search" />
                  </button>
                </div>
                <div className="content-tabs">
                  <div
                    className={
                      tabsMessage === 1 ? "content active-content" : "content"
                    }
                  >
                    CONTENT ALL
                  </div>
                  <div
                    className={
                      tabsMessage === 2 ? "content active-content" : "content"
                    }
                  >
                    CONTENT MESSAGE
                  </div>
                  <div
                    className={
                      tabsMessage === 3 ? "content active-content" : "content"
                    }
                  >
                    CONTENT GROUP
                  </div>
                </div>
              </div>
              <div className="icon-add-message">
                <GoPlus size={23} color={"white"} />
              </div>
            </div>
          </div>
          <div className="card-messages">
            <div className="card-message-head">
              <div className="head-info-user">
                <div className="user-avatar">
                  <Image
                    src="/images/user3.jpg"
                    alt="User imagen"
                    width={250}
                    height={250}
                    className="user-img"
                  />
                </div>
                <div className="info-user-name-conection">
                  <span>Zack Martin</span>
                  <span>Seen at Mon, 12 Apr 2021 17:00:59 GMT</span>
                </div>
              </div>
              <div className="head-icon-action">
                <MdAddPhotoAlternate size={30} color={"gray"} />
                <FaEllipsisV size={25} color={"gray"} />
              </div>
            </div>
            <div className="card-message-content">
              {dataMessage.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="message"
                    id={item.to === nameUser ? "message-your" : "message-other"}
                  >
                    {/* <div className="message-avatar"></div> */}
                    <div key={item.id} className="message-content">
                      <div>{item.message}</div>
                      <div>{item.to}</div>
                      <div className="message-date">{`${item.date}`}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="card-message-send">
              <div className="input-send-message">
                <input
                  value={currentMessage}
                  type="text"
                  placeholder="Type a message"
                  onChange={(event) => {
                    setCurrentMessage(event.target.value);
                  }}
                  onKeyPress={(event) => {
                    event.key === "Enter" && onSendClick();
                  }}
                />
                <BsEmojiLaughing
                  size={25}
                  color={"gray"}
                  className="icon-send-emoji"
                />
              </div>

              <MdKeyboardVoice
                size={40}
                color={"white"}
                className="icon-voice"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
