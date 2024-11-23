/*
// vite.config.https.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(dirname, 'ssl', 'server.key')),
      cert: fs.readFileSync(path.resolve(dirname, 'ssl', 'server.crt'))
    },
    port: 5001, // Porta HTTPS
  },
});
 contéudo antigo x contéudo git
*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('./ssl/server.key'),
      cert: fs.readFileSync('./ssl/server.crt')
    }
  }
});