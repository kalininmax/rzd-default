export default {
	build: {
		html: 'build',
		scripts: 'build/assets/js/',
		styles: 'build/assets/css/',
		images: 'build/assets/images/',
		fonts: 'build/assets/fonts/',
		sprites: 'build/assets/images/sprites/',
		svg: 'build/assets/svg/',
		jsons: 'build/assets/jsons/',
	},
	src: {
		templates: './src/',
		nunj: 'src/pages/**/*.nunj',
		scripts: 'src/assets/js/index.js',
		styles: 'src/assets/styles/styles.scss',
		images: 'src/assets/images/**/*.*',
		imagesInline: 'src/assets/images/inline/',
		fonts: 'src/assets/fonts/**/*.*',
		sprites: 'src/assets/images/sprites/*.png',
		svg: 'src/assets/svg/**/*.svg',
		jsons: 'src/assets/jsons/**/*.*',
	},
	watch: {
		nunj: ['src/**/*.nunj', 'global-data.json'],
		scripts: 'src/**/*.js',
		styles: 'src/**/*.scss',
		images: 'src/assets/images/**/*.*',
		fonts: 'src/assets/fonts/**/*.*',
		sprites: 'src/assets/images/sprites/*.png',
		svg: 'src/assets/svg/**/*.svg',
		jsons: 'src/assets/jsons/**/*.*',
	},
	clean: 'build/',
};