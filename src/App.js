import './App.scss';
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginScreen from './screens/loginScreen/LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} >

          {/* <Route /> */}
          {/* <Route /> */}
          {/* <Route /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
