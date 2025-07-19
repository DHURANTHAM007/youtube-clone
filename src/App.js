// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
// Import SearchResults when you create it
// import SearchResults from './components/SearchResults';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#0F0F0F' }}>
      <Navbar />
      <Stack direction="row" spacing={{ xs: 0, sm: 2 }}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Sidebar />
        </Box>
        
        <Box sx={{ width: '100%' }}>
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            {/* <Route path="/search/:searchTerm" element={<SearchResults />} /> */}
          </Routes>
        </Box>
      </Stack>
    </Box>
  </BrowserRouter>
);

export default App;
