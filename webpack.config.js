module.exports = {
    mode: "development",
    entry: './public/main.js',
    output: {
        filename: '../public/bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.hbs$/,
            //     loader: 'handlebars-loader',
            //     exclude: /(node_modules)/
            // },
            {
                test: /\.pug$/,
                use: [
                    'pug-loader'
                ]
            },
            {
                test: /\.(png|ico|svg|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name(resourcePath, resourceQuery) {
                        return '/images/' + '[name].[ext]';
                        //[contenthash].[ext]
                    },
                },
            },
        ]
    }
}