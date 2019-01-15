import path from 'path';
import webpack from 'webpack';
import atImport from 'postcss-import';
import cssnext from 'postcss-cssnext';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import palette from './config/palette';
import media from './config/media';
import env from './config/env';

const uglifyDevOptions = {
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
};

const uglifyProductionOptions = {
	uglifyOptions: {
		parse: {
			// we want uglify-js to parse ecma 8 code. However, we don't want it
			// to apply any minfication steps that turns valid ecma 5 code
			// into invalid ecma 5 code. This is why the 'compress' and 'output'
			// sections only apply transformations that are ecma 5 safe
			// https://github.com/facebook/create-react-app/pull/4234
			ecma: 8,
		},
		compress: {
			ecma: 5,
			warnings: false,
			// Disabled because of an issue with Uglify breaking seemingly valid code:
			// https://github.com/facebook/create-react-app/issues/2376
			// Pending further investigation:
			// https://github.com/mishoo/UglifyJS2/issues/2011
			comparisons: false,
		},
		mangle: {
			safari10: true,
		},
		output: {
			ecma: 5,
			comments: false,
			// Turned on because emoji and regex is not minified properly using default
			// https://github.com/facebook/create-react-app/issues/2488
			ascii_only: true,
		},
	},
	// Use multi-process parallel running to improve the build speed
	// Default number of concurrent runs: os.cpus().length - 1
	parallel: true,
	// Enable file caching
	cache: true,
	sourceMap: false,
};

const webpackProdConfig = {
	devtool: 'source-map',
	mode: process.env.NODE_ENV,
	entry: {
		app: './src/index.js',
	},
	output: {
		path: path.join(__dirname, '_public'),
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].chunk.js',
		publicPath: '/',
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': env,
		}),

		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				removeScriptTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
			inject: true,
			showErrors: false,
			filename: 'index.html',
			chunksSortMode: 'dependency',
		}),

		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css',
		}),
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin(
				process.env.NODE_ENV === 'production' ? uglifyProductionOptions : uglifyDevOptions,
			),
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
				include: [path.join(__dirname, 'src')],
				exclude: path.join(__dirname, 'node_modules'),
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', { loose: true, modules: false, useBuiltIns: 'entry' }],
						'@babel/preset-react',
					],
				},
			},
			{
				test: /\.css$/,
				include: path.join(__dirname, 'src'),
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: process.env.NODE_ENV !== 'production',
							camelCase: true,
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]__[local]___[hash:base64:5]',
							minimize: true,
							autoprefixer: false,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: process.env.NODE_ENV !== 'production' ? 'inline' : false,
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
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: process.env.NODE_ENV !== 'production',
							minimize: true,
							autoprefixer: false,
						},
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif)$/,
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

// Minify and optimize the CSS
if (process.env.NODE_ENV === 'production') {
	webpackProdConfig.plugins.push(new OptimizeCSSAssetsPlugin({}));
}

export default webpackProdConfig;
