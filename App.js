import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Typography, Space } from 'antd';
import { Link } from 'react-router-dom';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';
import { color } from 'chart.js/helpers';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <div className="routes">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          CryptoPlanet
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
