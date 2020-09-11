var webpack = require('webpack');
module.exports = {
    lintOnSave: false,
	publicPath:process.env.NODE_ENV === 'production'? '.': '/',
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                '$': "jquery",
                'jQuery': "jquery",
                'window.jQuery': 'jquery',
                'Popper': 'popper.js',
                'bootstap': 'bootstap'
            }),
        ]
    }
}