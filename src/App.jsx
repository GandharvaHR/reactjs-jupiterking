import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />


        <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;