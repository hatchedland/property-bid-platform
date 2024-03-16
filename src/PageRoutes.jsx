import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PropertyList } from './components/property/PropertyList';
import { PropertyDetailed } from './components/property/PropertyDetailed';
import { Home } from './components/Home';
import { ContactForm } from './components/contact/ContactForm';
import { Output } from './components/property/Output'

export const PageRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/" element={<Output />} /> */}
                    <Route path="/contact/:propertyId" element={<ContactForm />} />
                    <Route path="/property/:propertyId" element={<PropertyDetailed />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
