import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Stack, Typography, Avatar } from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import mockData from '../utils/mockData';

const VideoDetail = () => {
  const { id } = useParams();

  return (
    <Box minHeight="95vh" p={3}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        <Box flex={3}>
          <Box sx={{ width: '100%' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls width="100%" height="50vh" />
            <Typography color="white" variant="h5" fontWeight="bold" p={2}>
              Video Title Placeholder
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: 'white', px: 2 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar />
                <Typography variant="subtitle1">Channel Name</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box flex={1}>
          <Typography variant="h6" fontWeight="bold" color="white" mb={2}>
            Up Next
          </Typography>
          <Stack direction="column" spacing={2}>
            {mockData.items.map((item, index) => (
              <Link to={`/video/${item.id.videoId}`} key={index}>
                  <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} style={{ width: '160px', borderRadius: '8px' }} />
              </Link>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
