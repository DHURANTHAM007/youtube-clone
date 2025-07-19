// src/components/Sidebar.js
import React from 'react';
import { Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Explore, Subscriptions, VideoLibrary } from '@mui/icons-material';

const categories = [
  { name: 'Home', icon: <Home /> },
  { name: 'Explore', icon: <Explore /> },
  { name: 'Subscriptions', icon: <Subscriptions /> },
  { name: 'Library', icon: <VideoLibrary /> },
];

const Sidebar = () => (
  <Stack
    sx={{
      height: { sx: 'auto', md: '95vh' },
      borderRight: '1px solid #303030',
      px: { sx: 0, md: 2 },
      color: 'white',
      position: 'sticky',
      top: 80, // Adjust for Navbar height
    }}
  >
    <List>
      {categories.map((category) => (
        <ListItem button key={category.name}>
          <ListItemIcon sx={{ color: 'white' }}>{category.icon}</ListItemIcon>
          <ListItemText primary={category.name} />
        </ListItem>
      ))}
    </List>
  </Stack>
);

export default Sidebar;
