import { useState } from "react";
import { useEffect } from "react";

const CrisisCard = (cityName) => {
  const [city, setCity] = useState();
  const [alertLevel, setAlertLevel] = useState();
  const evac = city?.evacuationRate;
  const coms = city?.communications;

  useEffect(() => {
    fetch(
      `https://grippy.learn.pierre-godino.com/api/mock/crisis-os/${cityName.cityName}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCity(data);
      });
  }, [cityName]);

  useEffect(() => {
    if (evac >= 70 || coms == "offline") {
      return setAlertLevel(1);
    } else if (evac >= 30 || coms == "unstable") {
      return setAlertLevel(2);
    } else {
      return setAlertLevel(3);
    }
  }, [coms, evac]);

  return (
    <div>
      <h2>{city?.city}</h2>
      {alertLevel == 1 ? (
        <p className="red-level">Red</p>
      ) : alertLevel == 2 ? (
        <p className="orange-level">Orange</p>
      ) : (
        <p className="green-level" >Green</p>
      )}
      <p>Evacuation : {evac}%</p>
      <ul>
        <li>Communications : {coms} </li>
        <li>Infrastructure : {city?.infrastructureStatus} </li>
        {/* {console.log(alertLevel)} */}
      </ul>
    </div>
  );
};

export default CrisisCard;
