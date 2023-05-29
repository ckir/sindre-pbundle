import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/sindre-p.js',
		format: 'es',
		name: 'sp'
	},
	plugins: [
		nodeResolve({jsnext: true}),
		nodePolyfills( /* options */),
		typescript(),
	],
	// sourceMap: 'inline',
	onwarn: function (warning) {
		// Skip certain warnings

		// should intercept ... but doesn't in some rollup versions
		if (warning.code === 'THIS_IS_UNDEFINED') { return; }

		// console.warn everything else
		console.warn(warning.message);
	},
};


