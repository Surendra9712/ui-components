import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        react(),
        visualizer({
            filename: './dist/stats.html',
            open: true,
        }),
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: '@surendra/ui-components',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'antd'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    antd: 'antd',
                },
            },
        },
        sourcemap: true,
        minify: 'terser',
    },
});