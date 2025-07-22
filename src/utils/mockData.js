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
    {
      id: { videoId: 'uXesN0cPQ_I' },
      snippet: {
        title: 'Top 5 New Games of the Year',
        thumbnails: { high: { url: 'https://i.ytimg.com/vi/uXesN0cPQ_I/hqdefault.jpg' } },
        channelTitle: 'IGN',
      },
    },
    {
      id: { videoId: '6l8y_n84_vU' },
      snippet: {
        title: 'Building a SaaS with Stripe & Next.js',
        thumbnails: { high: { url: 'https://i.ytimg.com/vi/6l8y_n84_vU/hqdefault.jpg' } },
        channelTitle: 'Fireship',
      },
    },
     ...Array.from({ length: 8 }).map((_, i) => ({
      id: { videoId: `mock_id_${i}` },
      snippet: {
        title: `Sample Video Title ${i + 5}`,
        thumbnails: { high: { url: `https://picsum.photos/seed/${i}/480/360` } },
        channelTitle: `Sample Channel ${i + 5}`,
      },
    })),
  ],
};

export default mockData;
