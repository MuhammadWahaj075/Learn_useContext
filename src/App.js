import React, { createContext } from "react";

// import FirstChildComp from "./components/First Comp/FirstChildComp";
import "./App.css";
import FirstChildComp from "./components/First Comp/FirstChildComp";
import ThirdChildComp from "./components/Third Comp/ThirdChildComp";

const data = createContext();
const data1 = createContext();
const data2 = createContext();
const data3 = createContext();

function App() {
  const name = "Wahaj";
  const gender = "Male";
  const fullName = "Muhammad Wahaj";
  const fatherName = "Shafique Ahmed";

  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ThirdChildComp />
        </data1.Provider>

        <data2.Provider value={fullName}>
          <data3.Provider value={fatherName}>
          <FirstChildComp />
          </data3.Provider>
        </data2.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export { data, data1, data2, data3 };
