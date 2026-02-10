import "./App.css";
import Search from "./assets/Search.jsx";

function App() {
  const cities = [
    "Vulcania",
    "Tornadis",
    "Pluvinor",
    "Auroria",
    "Pyros",
    "Lagrania",
    "Cryon",
    "Thundera",
    "Ashmere",
    "Stormreach",
    "Seismora",
    "Dustmere",
    "Obscuria",
    "Fumetide",
    "Ignithar",
    "Frostmoor",
    "Quakestone",
    "Blazebridge",
    "Nimbora",
    "Driftval",
  ];

  return (
    <>
      <Search citiesList={cities} />
    </>
  );
}

export default App;
