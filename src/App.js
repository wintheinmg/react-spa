import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./styles/Shares";
import { GlobalCss } from "./styles/GlbalCss";
import Nav from "./components/Nav";
import Home from "./components/Home";

const theme = {
  colors: {
    primary: "aliceblue",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
