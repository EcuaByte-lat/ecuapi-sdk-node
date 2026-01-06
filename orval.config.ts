import { defineConfig } from 'orval';

export default defineConfig({
  ecuapi: {
    input: 'https://api.ecuapi.com/openapi.json',
    output: {
      mode: 'tags-split',
      target: 'src/client.ts',
      schemas: 'src/models',
      client: 'fetch',
      baseUrl: 'https://api.ecuapi.com',
    },
  },
});
