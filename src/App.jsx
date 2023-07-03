import { useState } from "react";
import data from "./Tours";
import "./App.css";

function App() {
  const [tour, setTour] = useState(data);

  return (
    <>
      {tour.map((item) => {
        const { id, name, img, description, price } = item;
        return (
          <ul key={id}>
            <li>
              <img src={img} className="image" />
            </li>
            <li>{price}</li>
            <li>{name}</li>
            <li>{description}</li>
          </ul>
        );
      })}
    </>
  );
}

export default App;
