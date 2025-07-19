// src/components/VideoCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Avatar, Stack } from '@mui/material';

const VideoCard = ({ video }) => (
  <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0, background: 'none' }}>
    <Link to={`/video/${video.id.videoId}`}>
      <CardMedia
        image={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
        sx={{ width: '100%', height: 180, borderRadius: '12px' }}
      />
    </Link>
    <CardContent sx={{ p: '12px 0' }}>
      <Stack direction="row" spacing={2}>
        <Avatar alt={video.snippet.channelTitle} />
        <Box>
          <Link to={`/video/${video.id.videoId}`}>
            <Typography variant="subtitle1" fontWeight="bold" color="white" sx={{ 
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
            }}>
              {video.snippet.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="gray">
            {video.snippet.channelTitle}
          </Typography>
          <Typography variant="body2" color="gray">
            1M views • 1 day ago
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

export default VideoCard;```

#### `src/components/Feed.js`
The main content area that displays a grid of `VideoCard` components. For now, we will use mock data.

```jsx
// src/components/Feed.js
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import VideoCard from './VideoCard';
import mockData from '../mockData'; // We will create this file next

const Feed = () => {
  return (
    <Box p={2} sx={{ flexGrow: 1 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
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
