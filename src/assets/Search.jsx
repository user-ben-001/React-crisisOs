import { useEffect, useState } from "react";
import CrisisCard from "./CrisisCard";
import GlobalAlert from "./GlobalAlert";

const Search = (citiesList) => {
  const cities = [...citiesList.citiesList];
  const [activeCity, setActiveCity] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [dangerAlert, setDangerAlert] = useState(false);
  const redAlert = document.querySelectorAll(".red-level");

  const addFocus = (elem) => {
    const newList = [...activeCity];
    newList.includes(elem.toLowerCase())
      ? console.log("already oppened")
      : newList.push(elem.toLowerCase());
    setActiveCity(newList);
  };

  const searchCity = (e) => {
    if (e.key === "Enter" && input != "") {
      addFocus(input);
      setSearch(input);
      setInput("");
    }
  };
  useEffect(() => {
    if (redAlert.length >= 3) {
      setDangerAlert(true);
    }
  }, [activeCity]);

  return (
    <>
      <div id="city-list">
        <div id="city-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={searchCity}
          />
          <p>Search : {search}</p>
        </div>
        <ul>
          {cities.map((elem) => {
            return (
              <li key={elem}>
                <button
                  onClick={() => {
                    addFocus(elem);
                  }}
                >
                  {elem}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="card-display">
        {dangerAlert && <GlobalAlert info={redAlert} />}
        {activeCity.map((elem) => {
          return <CrisisCard key={elem} cityName={elem} />;
        })}
      </div>
      {console.log(redAlert)}
    </>
  );
};

export default Search;
