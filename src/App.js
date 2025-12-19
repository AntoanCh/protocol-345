import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Protocol from "./components/Protocol/Protocol";
import Home from "./components/Home";
import TotalProtocol from "./components/Total/TotalProtocol";
import { useState, useEffect } from "react";
import Dash from "./components/Dash/Dash";
import DashProto from "./components/Dash/DashProto";
import DashHome from "./components/Dash/DashHome";


function App() {
  //constructor function for generating sub-routes for each store
  //based on number of cash registers and name of the store
  const generateRoutes = (kasi, obekt) => {
    const arr = [];
    for (let i = 1; i <= kasi; i++) {
      arr.push(
        <Route
          key={i}
          path={`kasa${i}`}
          element={<Protocol kasa={`${i}`} obekt={obekt} />}
        />
      );
    }
    return arr;
  };
  const sites = [
    ["veslec", 2],
    ["biser", 2],
    ["banishora", 2],
    ["mladost", 2],
    ["svtroica", 2],
    ["ovkupel", 2],
    ["geomilev", 2],
    ["pirin", 2],
    ["pirogov", 2],
    ["gorublqne", 2],
    ["reduta", 2],
    ["boqna", 2],
    ["sitnqkovo", 2],
    ["izgrev", 2],
    ["smirnenski", 2],
  ];
  const generateDash = () => {
    // const arr = [];
    const arr = sites.map((site, index) => {
      return (
        <Route
          key={index}
          path={site[0]}
          element={<Dash obekt={site[0]} kasi={site[1]} />}
        >
          {generateRoutes(site[1], site[0])}
        </Route>
      );
    });
    return arr;
  };

  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<DashHome />}>
          {generateDash()}
        </Route>
        <Route path="/veslec" element={<Main kasi="2" obekt="veslec" />}>
          {generateRoutes(2, "ВЕСЛЕЦ")}
          <Route path="total" element={<TotalProtocol obekt="ВЕСЛЕЦ" />} />
        </Route>
        <Route path="/lozenec" element={<Main kasi="2" obekt="lozenec" />}>
          {generateRoutes(2, "БИСЕР")}
          <Route path="total" element={<TotalProtocol obekt="БИСЕР" />} />
        </Route>
        <Route path="/banishora" element={<Main kasi="2" obekt="banishora" />}>
          {generateRoutes(2, "БАНИШОРА")}
          <Route path="total" element={<TotalProtocol obekt="БАНИШОРА" />} />
        </Route>
        <Route path="/mladost" element={<Main kasi="3" obekt="mladost" />}>
          {generateRoutes(3, "МЛАДОСТ")}
          <Route path="total" element={<TotalProtocol obekt="МЛАДОСТ" />} />
        </Route>
        <Route path="/svtroica" element={<Main kasi="2" obekt="svtroica" />}>
          {generateRoutes(2, "СВ. ТРОИЦА")}
          <Route path="total" element={<TotalProtocol obekt="СВ. ТРОИЦА" />} />
        </Route>
        <Route path="/ovkupel" element={<Main kasi="2" obekt="ovkupel" />}>
          {generateRoutes(2, "ОВ. КУПЕЛ")}
          <Route path="total" element={<TotalProtocol obekt="ОВ. КУПЕЛ" />} />
        </Route>
        <Route path="/geomilev" element={<Main kasi="2" obekt="geomilev" />}>
          {generateRoutes(2, "ГЕО МИЛЕВ")}
          <Route path="total" element={<TotalProtocol obekt="ГЕО МИЛЕВ" />} />
        </Route>
        <Route path="/pirin" element={<Main kasi="3" obekt="pirin" />}>
          {generateRoutes(3, "ПИРИН")}
          <Route path="total" element={<TotalProtocol obekt="ПИРИН" />} />
        </Route>
        <Route path="/pirogov" element={<Main kasi="2" obekt="pirogov" />}>
          {generateRoutes(2, "ПИРОГОВ")}
          <Route path="total" element={<TotalProtocol obekt="ПИРОГОВ" />} />
        </Route>
        <Route path="/gorublqne" element={<Main kasi="2" obekt="gorublqne" />}>
          {generateRoutes(2, "ГОРУБЛЯНЕ")}
          <Route path="total" element={<TotalProtocol obekt="ГОРУБЛЯНЕ" />} />
        </Route>
        <Route path="/reduta" element={<Main kasi="2" obekt="reduta" />}>
          {generateRoutes(2, "РЕДУТА")}
          <Route path="total" element={<TotalProtocol obekt="РЕДУТА" />} />
        </Route>
        <Route path="/boqna" element={<Main kasi="2" obekt="boqna" />}>
          {generateRoutes(2, "БОЯНА")}
          <Route path="total" element={<TotalProtocol obekt="БОЯНА" />} />
        </Route>
        <Route path="/sitnqkovo" element={<Main kasi="2" obekt="sitnqkovo" />}>
          {generateRoutes(2, "СИТНЯКОВО")}
          <Route path="total" element={<TotalProtocol obekt="СИТНЯКОВО" />} />
        </Route>
        <Route path="/izgrev" element={<Main kasi="2" obekt="izgrev" />}>
          {generateRoutes(2, "ИЗГРЕВ")}
          <Route path="total" element={<TotalProtocol obekt="ИЗГРЕВ" />} />
        </Route>
        <Route path="/smirnenski" element={<Main kasi="2" obekt="smirnenski" />}>
          {generateRoutes(2, "СМИРНЕНСКИ")}
          <Route path="total" element={<TotalProtocol obekt="СМИРНЕНСКИ" />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
