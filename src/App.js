import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";
import { render } from "react-dom";
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {

  const theme = useState('darkblue');
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
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
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
