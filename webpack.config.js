import path from 'path';
import webpack from 'webpack';
import atImport from 'postcss-import';
import cssnext from 'postcss-cssnext';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
// problem
// import BabelEnginePlugin from 'babel-engine-plugin';

import palette from './config/palette';
import media from './config/media';
import env from './config/env';

export default {
	devtool: 'cheap-module-eval-source-map',
	mode: 'development',
	entry: {
		app: ['webpack-hot-middleware/client', 'react-hot-loader/patch', './src/index.js'],
		// problem
		// vendor: [
		// 	'whatwg-fetch',
		// 	'react',
		// 	'react-container-helper',
		// 	'react-dom',
		// 	'react-redux',
		// 	'react-router',
		// 	'react-router-redux',
		// 	'redux',
		// 	'redux-actions',
		// 	'redux-promise-middleware',
		// 	'redux-thunk-fsa',
		// 	'rxjs',
		// 	'redux-observable',
		// ],
	},
	output: {
		path: path.join(__dirname, '_public'),
		filename: '[name].bundle.js',
		publicPath: '/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': env,
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			chunksSortMode: 'dependency',
		}),
		// problem
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: ['vendor', 'manifest'],
		// 	minChunks: Infinity,
		// }),
		// new webpack.NoEmitOnErrorsPlugin(),
		// new BabelEnginePlugin({
		// 	presets: ['env'],
		// }),
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						warnings: false,
						comparisons: false,
					},
					output: {
						comments: false,
						ascii_only: false,
					},
				},
			}),
		],
		// Automatically split vendor and commons
		// https://twitter.com/wSokra/status/969633336732905474
		// https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
		splitChunks: {
			chunks: 'all',
			name: 'vendors',
		},
		// Keep the runtime chunk seperated to enable long term caching
		// https://twitter.com/wSokra/status/969679223278505985
		runtimeChunk: true,
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: path.join(__dirname, 'src'),
				exclude: path.join(__dirname, 'node_modules'),
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', { loose: true, modules: false, useBuiltIns: 'entry' }],
						'@babel/preset-react',
					],
					plugins: [
						'react-hot-loader/babel',
						['module-resolver', { root: ['./src'] }],
						'@babel/plugin-syntax-dynamic-import',
						'@babel/plugin-syntax-import-meta',
						'@babel/plugin-proposal-class-properties',
						'@babel/plugin-proposal-json-strings',
						'@babel/plugin-transform-react-constant-elements',
					],
					// presets: [['es2015', { loose: true, modules: false }], 'react', 'stage-3'],
					// plugins: ['react-hot-loader/babel', ['module-resolver', { root: ['./src'] }]],
				},
			},
			{
				test: /\.css$/,
				include: path.join(__dirname, 'src'),
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							camelCase: true,
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]__[local]___[hash:base64:5]',
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: 'inline',
							plugins: () => [
								atImport(),
								cssnext({
									features: {
										customProperties: {
											variables: palette,
										},
										customMedia: {
											extensions: media,
										},
									},
								}),
							],
						},
					},
				],
			},
			{
				test: /\.css$/,
				include: path.join(__dirname, 'node_modules'),
				use: [
					{ loader: 'style-loader', options: { sourceMap: true } },
					{ loader: 'css-loader', options: { sourceMap: true } },
				],
			},
			{
				test: /\.(jpe?g|png|gif|pdf)$/,
				include: path.join(__dirname, 'src'),
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: './assets/[name]__[hash].[ext]',
				},
			},
			{
				test: /^(?!.*\.inline\.svg$).*\.svg$/,
				include: path.join(__dirname, 'src'),
				use: [
					'svgr/webpack',
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: './assets/[name]__[hash].[ext]',
						},
					},
				],
				// use: [
				// 	'babel-loader',
				// 	'svg-react-loader',
				// 	{
				// 		loader: 'svgo-loader',
				// 		options: {
				// 			plugins: [{ removeTitle: true }, { collapseGroups: false }],
				// 		},
				// 	},
				// 	'svg-css-modules-loader',
				// 	{
				// 		loader: 'string-replace-loader',
				// 		options: {
				// 			search: '%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22',
				// 			replace: '',
				// 		},
				// 	},
				// ],
			},
			{
				test: /\.inline.svg$/,
				include: path.join(__dirname, 'src'),
				loader: 'svgr/webpack',
				options: {
					svgo: false,
				},
			},
		],
	},
	node: {
		fs: 'empty',
	},
	resolve: {
		modules: ['node_modules'],
	},
};
