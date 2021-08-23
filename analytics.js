let Analytics = require('filum-react-native');

export const filumAnalytics = new Analytics(
  '<WRITEKEY>',
  {
    host: 'https://event.filum.ai',
  },
);
