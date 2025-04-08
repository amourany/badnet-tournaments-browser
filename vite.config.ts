import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import {TanStackRouterVite} from '@tanstack/router-plugin/vite';
import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
	base: '/badnet-tournaments-browser',
	plugins: [
		TanStackRouterVite({
			generatedRouteTree: './src/routeTree.gen.ts',
			routesDirectory: './src/routes',
		}),
		react(),
		svgr(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@api': resolve(__dirname, './src/api'),
			'@assets': resolve(__dirname, './src/assets'),
			'@components': resolve(__dirname, './src/components'),
			'@config': resolve(__dirname, './src/config'),
			'@effects': resolve(__dirname, './src/effects'),
			'@hooks': resolve(__dirname, './src/hooks'),
			'@jestConfig': resolve(__dirname, './jest'),
			'@pages': resolve(__dirname, './src/pages'),
			'@providers': resolve(__dirname, './src/providers'),
			'@routes': resolve(__dirname, './src/routes'),
			'@store': resolve(__dirname, './src/store'),
			'@styles': resolve(__dirname, './src/styles'),
			'@templates': resolve(__dirname, './src/templates'),
			'@translations': resolve(__dirname, './src/translations'),
			'@types': resolve(__dirname, './src/types'),
			'@utils': resolve(__dirname, './src/utils'),
		},
	},
});
