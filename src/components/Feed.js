import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import VideoCard from './VideoCard';
import mockData from '../utils/mockData';

const Feed = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" mb={3} sx={{ color: 'white' }}>
        Recommended
      </Typography>
      <Grid container spacing={3}>
        {mockData.items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <VideoCard video={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Feed;
