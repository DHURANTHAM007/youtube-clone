// src/components/Navbar.js
import React from 'react';
import { Stack, Box, Typography, TextField, IconButton, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import { YouTube, Search, VideoCall, Notifications, AccountCircle } from '@mui/icons-material';

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ 
      position: 'sticky', 
      background: '#0F0F0F', 
      top: 0, 
      justifyContent: 'space-between',
      borderBottom: '1px solid #303030',
      zIndex: 10
    }}
  >
    {/* Logo */}
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <YouTube sx={{ color: 'red', fontSize: '32px' }} />
      <Typography variant="h6" fontWeight="bold" sx={{ color: 'white', ml: 1, display: { xs: 'none', sm: 'block' } }}>
        YouTube
      </Typography>
    </Link>

    {/* Search Bar */}
    <Box sx={{ width: '40%' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search"
        size="small"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            '& fieldset': { borderColor: '#303030' },
            '&:hover fieldset': { borderColor: 'gray' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
          input: { color: 'white' },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Search sx={{ color: 'gray' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
    
    {/* Icons */}
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton><VideoCall sx={{ color: 'white' }} /></IconButton>
      <IconButton><Notifications sx={{ color: 'white' }} /></IconButton>
      <IconButton><AccountCircle sx={{ color: 'white' }} /></IconButton>
    </Stack>
  </Stack>
);

export default Navbar;
