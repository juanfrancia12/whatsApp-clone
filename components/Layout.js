import Image from "next/image";

const Layout = () => {
  return (
    <section className="container-content">
      <div className="card-view">
        <div className="card-view-user">user</div>
        <div className="card-view-search">search</div>
        <div className="card-view-chats">chats</div>
      </div>
      <div className="card-messages">
        <div className="card-message-head">
          <div className="head-info-user">
            <div className="user-avatar">
              <Image
                src="/public/vercel.svg"
                alt="User imagen"
                width={250}
                height={250}
              />
            </div>
            <div className="info-user-name-conection">
              <span>Zack Martin</span>
              <span>Seen at Mon, 12 Apr 2021 17:00:59 GMT</span>
            </div>
          </div>
          <div className="head-icon-action">actions</div>
        </div>
        <div className="card-message-content">content</div>
        <div className="card-message-send">send</div>
      </div>
    </section>
  );
};

export default Layout;
