import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </Container>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;