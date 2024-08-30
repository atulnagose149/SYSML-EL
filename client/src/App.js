

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Sidebar from "./components/Sidebar.js"; // Assuming you have a Sidebar component

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div id="outer-container">
          <Sidebar />
          <div id="page-wrap">
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
