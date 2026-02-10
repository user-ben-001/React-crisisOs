const GlobalAlert = (info) => {
  const data = info.info;
  return (
    <div id="global-alert">
      <h2>Global Alert</h2>
      <p>
        {/* {info.map((e) => {
          return console.log(e);
        })} */}
        in maximal alert
      </p>
      {/* {console.log(data)} */}
    </div>
  );
};

export default GlobalAlert;
