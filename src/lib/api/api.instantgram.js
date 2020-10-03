import axios from 'axios';
import config from '../../config';

const client = axios.create();

export const requestFeeds = ({ payload: fields }) =>
  client.get(
    `${config.api.endpoint}/me/media?fields=${fields.join(',')}&access_token=${
      config.api.token
    }`,
  );
