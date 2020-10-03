import dotenv from 'dotenv';

dotenv.config();

const config = {
  api: {
    endpoint: process.env.REACT_APP_INSTA_ENDPOINT,
    token: process.env.REACT_APP_TOKEN,
  },
};

export default config;
