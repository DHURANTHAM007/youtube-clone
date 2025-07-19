// src/components/VideoDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography, Avatar } from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import VideoCard from './VideoCard';
import mockData from '../mockData'; // Use mock data for suggestions

const VideoDetail = () => {
  const { id } = useParams(); // Get the video ID from the URL

  return (
    <Box minHeight="95vh" p={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        {/* Main Video Player */}
        <Box flex={3}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls width="100%" />
            <Typography color="white" variant="h5" fontWeight="bold" p={2}>
              Video Title Placeholder
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: 'white', px: 2 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar />
                <Typography variant="subtitle1">Channel Name</Typography>
              </Stack>
              {/* Like/Dislike/Share buttons would go here */}
            </Stack>
          </Box>
        </Box>

        {/* Suggested Videos */}
        <Box flex={1} px={2} py={{ md: 1, xs: 5 }}>
          <Typography variant="h6" fontWeight="bold" color="white" mb={2}>
            Suggested Videos
          </Typography>
          <Stack direction="column" spacing={2}>
            {mockData.items.map((item, index) => (
              <VideoCard key={index} video={item} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
