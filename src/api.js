import axios from 'axios';

const TOKEN =
  'IGQVJYbUFUY1FISkl2c1o3WVdoSkRZAQWJmNElaOTBOTm01c2V0WnF6bkRSbExFLTh3SkdaN0RVeGJvZA1RKdTlkWWZAHMnVxTWhzeGpEOTNlQ3JoSEFFaUlGSTh4cnlfWE5CQi1hWXZAwSGhhRFJ2SjdZAUQZDZD';

export const getList = () =>
  axios.get(
    `https://graph.instagram.com/me/media?access_token=${TOKEN}&fields=id,caption,media_type,media_url,thumbnail_url,permalink`,
  );

export default {};
