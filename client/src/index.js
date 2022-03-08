import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import DataProvider from "./providers/DataProvider";
import Home from "./pages/Home";
import GunForm from "./pages/GunForm";
import GunShow from "./pages/GunShow";
import Guns from "./pages/Guns";


const NotFound = ()=>{
  return <p>path not found</p>
}

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/guns" element={<Guns />} />
          <Route path="/guns/new" element={<GunForm />} />
          <Route path="/guns/:id" element={<GunShow />} />
          <Route path="/guns/:id/edit" element={<GunForm />} />


          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
