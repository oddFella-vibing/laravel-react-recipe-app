import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [
        laravel({
            input: [ 'resources/js/app.tsx','resources/css/app.css'],
            ssr:['resources/js/ssr.tsx'],
            refresh: true,
        }),react(),tailwindcss()
    ],
      resolve: {
        alias: {
            "@": "/resources/js",
             'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
});
