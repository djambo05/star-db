const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100vw",
        height: "100px",
        padding: "20px 20px",
        columnGap: "50px",
        whiteSpace: "nowrap",
      }}
    >
      <h2>Star DB</h2>
      <a href="#/people">People</a>
      <a href="#/planets">Planets</a>
      <a href="#/starships">Starships</a>
    </div>
  );
};

export default Header;
