const Container = (props) => {
  return (
    <div>
      <div className="navigation"></div>
      <div>{props.children}</div>
      <div className="footer"></div>
    </div>
  );
};

export default Container;
