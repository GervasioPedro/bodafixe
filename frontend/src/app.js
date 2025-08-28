import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchServices from './pages/SearchServices';
import RequestQuote from './pages/RequestQuote';
import AddReview from './pages/AddReview';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/services" element={<SearchServices />} />
                <Route path="/request-quote/:id" element={<RequestQuote />} />
                <Route path="/add-review/:id" element={<AddReview />} />
            </Routes>
        </Router>
    );
}

export default App;