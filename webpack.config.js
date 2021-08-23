module.exports = {
    entry: './public/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                exclude: /(node_modules)/
            },
        ]
    }
}