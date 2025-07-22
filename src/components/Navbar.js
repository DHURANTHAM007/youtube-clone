import React from 'react';
import { Stack, Box, Typography, TextField, IconButton, InputAdornment, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu, Search, VideoCall, Notifications } from '@mui/icons-material';

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    justifyContent="space-between"
    p={2} 
    sx={{ 
      position: 'sticky', 
      background: '#0F0F0F', 
      top: 0, 
      height: '64px',
      borderBottom: '1px solid #272727',
      zIndex: 10
    }}
  >
    <Stack direction="row" alignItems="center" spacing={2}>
      <IconButton sx={{ color: 'white' }}><Menu /></IconButton>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/159px-YouTube_full-color_icon_%282017%29.svg.png" alt="logo" height={25} />
        <Typography variant="h6" fontWeight="bold" sx={{ color: 'white', ml: 1, display: { xs: 'none', sm: 'block' } }}>
          YouTube
        </Typography>
      </Link>
    </Stack>

    <Box sx={{ width: '40%', display: { xs: 'none', md: 'block' } }}>
      <TextField
        fullWidth variant="outlined" placeholder="Search" size="small"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px', '& fieldset': { borderColor: '#303030' },
            '&:hover fieldset': { borderColor: 'gray' },
          }, input: { color: 'white' },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton><Search sx={{ color: 'gray' }} /></IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
    
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton><VideoCall sx={{ color: 'white' }} /></IconButton>
      <IconButton><Notifications sx={{ color: 'white' }} /></IconButton>
      <Avatar sx={{ width: 32, height: 32 }} />
    </Stack>
  </Stack>
);

export default Navbar;
