const { src, dest } = require('gulp')
const svgmin = require('gulp-svgmin')
const replace = require('gulp-replace')

function svg() {
	return src('src/assets/icons/*.svg')
		.pipe(
			svgmin({
				plugins: [
					{ removeTitle: false },
					{ removeViewBox: false },
					// { removeUselessStrokeAndFill: false },
					// { removeAttrs: { attrs: 'fill' } },
				],
			})
		)
		.pipe(replace('#000', 'currentColor'))
		.pipe(dest('public/assets/icons/'))
}

// function color() {
// 	return src('public/assets/icons/*.svg')
// 		.pipe(replace('#000', 'currentColor'))
// 		.pipe(dest('public/assets/icons'))
// }

// exports.default = series(svg, color)
exports.default = svg
