const webpack = require('webpack'),
	path = require('path'),
	endPath = path.resolve(__dirname, 'build')

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css']
	},
	cache: true,
	entry: [
		// Activa Hot Module Reloading HMR para React
		'react-hot-loader/patch',
		// Hace el bundle del cliente para webpack-dev-server
		// y lo conecta al endpoint correspondiente
		'webpack-dev-server/client?http://localhost:9000',
		// Hace el bundle del cliente únicamente para el Hot-Reloading
		// Significa que solo hará Hot-Reload cuando realicemos cambios
		'webpack/hot/only-dev-server',
		// El punto de entrada de nuestra app	
		'./src/index.jsx'
	],
	output: {
		path: endPath,
		filename: 'app.js',
		publicPath: '/' // Necesario para el Hot-Reloading
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader'
						//options: { modules: true }
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'proccess.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		//new webpack.optimize.UglifyJsPlugin(),
		//Activa Hot-Reloading globalmente
		new webpack.HotModuleReplacementPlugin(),
		// Imprime por consola los nombres de los módulos en el Hot-Reloading
		new webpack.NamedModulesPlugin()
	],
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		contentBase: endPath,
		inline: true,
		compress: true,
		port: 9000,
		publicPath: '/'
	}
}