import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: '/tmp/openapi.json',
  output: 'src/client',
  client: '@hey-api/client-fetch',
  types: {
    dates: 'string',
  },
  services: {
    asClass: true,
  }
});
