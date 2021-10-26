import WindiCSS from 'vite-plugin-windicss'

export default {
	plugins: [
		WindiCSS({
			scan: {
				dirs: ['.'],
				fileExtensions: ['vue', 'js', 'ts'],
			},
		})
	],
};