import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PropertyDetailed } from "./components/property/PropertyDetailed";
import { Home } from "./components/Home";
import { ContactForm } from "./components/contact/ContactForm";
import { Login } from "./Login";
import { PrivateRoute } from "./PrivateRoute";

export const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact/:propertyId"
          element={
            <PrivateRoute>
              <ContactForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/property/:propertyId"
          element={
            <PrivateRoute>
              <PropertyDetailed />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
