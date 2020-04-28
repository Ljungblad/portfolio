const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESSS_TOKEN,
});

export default client;
