// src/mockData.js
const mockData = {
  items: [
    {
      id: { videoId: 'SqcY0GlETPk' },
      snippet: {
        title: 'Build a Responsive Personal Portfolio Website using React JS',
        thumbnails: { high: { url: 'https://i.ytimg.com/vi/SqcY0GlETPk/hqdefault.jpg' } },
        channelTitle: 'JavaScript Mastery',
      },
    },
    {
      id: { videoId: 'bMknfKXIFA8' },
      snippet: {
        title: 'React JS Full Course for Beginners',
        thumbnails: { high: { url: 'https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg' } },
        channelTitle: 'freeCodeCamp.org',
      },
    },
    // Add 10 more similar video objects here to fill the page
    ...Array.from({ length: 10 }).map((_, i) => ({
      id: { videoId: `mock_id_${i}` },
      snippet: {
        title: `Sample Video Title ${i + 3}`,
        thumbnails: { high: { url: 'https://via.placeholder.com/480x360.png?text=Video' } },
        channelTitle: `Sample Channel ${i + 3}`,
      },
    })),
  ],
};

export default mockData;
