import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">
            <h1>Adopt Me</h1>
          </Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
