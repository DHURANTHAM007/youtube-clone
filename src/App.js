import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#0F0F0F', color: 'white' }}>
      <Navbar />
      <Stack direction="row">
        <Sidebar />
        <Box sx={{ width: '100%', height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
          </Routes>
        </Box>
      </Stack>
    </Box>
  </BrowserRouter>
);

export default App;
