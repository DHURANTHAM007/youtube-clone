import React from 'react';
import { Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
      width: { xs: 'auto', md: '240px' },
      height: 'calc(100vh - 64px)',
      borderRight: '1px solid #272727',
      px: { xs: 0, md: 2 },
      color: 'white',
      display: { xs: 'none', md: 'flex' }
    }}
  >
    <List>
      {categories.map((category) => (
        <ListItemButton key={category.name} sx={{ borderRadius: '8px' }}>
          <ListItemIcon sx={{ color: 'white' }}>{category.icon}</ListItemIcon>
          <ListItemText primary={category.name} />
        </ListItemButton>
      ))}
    </List>
  </Stack>
);

export default Sidebar;
