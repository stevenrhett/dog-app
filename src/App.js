import Hero from './Pages/Hero';
import React from 'react';
import LoginPage from "./Pages/LoginPage";
import {Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";
function App() {
  return (
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;
