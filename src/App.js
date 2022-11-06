import "./App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import LoginScreen from "./screens/loginScreen/LoginScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import SearchScreen from "./screens/searchScreen/SearchScreen";
import ProfileScreen from "./screens/profileScreen/ProfileScreen";
import BaseScreen from "./screens/baseScreen/BaseScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index path="/" element={<LoginScreen />} />

        <Route element={<BaseScreen />} >

          <Route path="/home" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />

        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
