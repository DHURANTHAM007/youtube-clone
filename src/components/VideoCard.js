import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const VideoCard = ({ video }) => (
  <Link to={`/video/${video.id.videoId}`}>
    <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0, background: 'none' }}>
      <CardMedia
        image={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
        sx={{ width: '100%', height: 180, borderRadius: '12px' }}
      />
      <CardContent sx={{ p: '12px 0 0 0' }}>
          <Typography variant="subtitle1" fontWeight="500" color="white" sx={{ 
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
          }}>
            {video.snippet.title}
          </Typography>
          <Typography variant="body2" color="gray" mt={1}>
            {video.snippet.channelTitle}
          </Typography>
          <Typography variant="body2" color="gray">
            1M views • 1 day ago
          </Typography>
      </CardContent>
    </Card>
  </Link>
);

export default VideoCard;
