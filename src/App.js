import "./App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// import LoginScreen from "./screens/loginScreen/LoginScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import SearchScreen from "./screens/searchScreen/SearchScreen";
import ProfileScreen from "./screens/profileScreen/ProfileScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/" element={<LoginScreen />} > */}

          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />

        {/* </Route> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
