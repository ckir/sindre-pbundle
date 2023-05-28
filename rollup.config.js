import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-polyfill-node';


export default {
	input: 'dist/index.js',
	output: {
		file: 'build/sindre-p.js',
		format: 'iife',
		name: 'sp'
	},
	plugins: [
		nodeResolve(),
		nodePolyfills( /* options */ )
	],
        sourceMap: 'inline',
		onwarn: function(warning) {
			// Skip certain warnings
		
			// should intercept ... but doesn't in some rollup versions
			if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
		
			// console.warn everything else
			console.warn( warning.message );
		},		
};


