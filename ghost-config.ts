import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: 'b0ef8cf2034acf85b808d03150',
    version: "v5.0"
  });