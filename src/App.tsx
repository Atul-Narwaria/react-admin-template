import React, { Suspense, lazy } from 'react'
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";

function App() {

    


    const Dashboard = lazy(() => import("./pages/admin/Dashboard"));


  return (
    <BrowserRouter>
      <ToastContainer />
      <Suspense>
      <Routes>
      <Route path="/admin" element={<Admin />}>
      <Route index element={<Dashboard />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="students" element={<Dashboard />} />
         <Route path="teachers" element={<Dashboard />} />
         <Route path="classes" element={<Dashboard />} />
         <Route path="subjects" element={<Dashboard />} />
         <Route path="notices" element={<Dashboard />} />
         <Route path="exam" element={<Dashboard />} />
         <Route path="attendance" element={<Dashboard />} />
    </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
