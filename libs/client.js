import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'apipi',
  apiKey: process.env.API_KEY,
});