const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'main.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i,  //.css로 끝난다  i:ignore 대문자 소문자
            use: ['style-loader','css-loader', 'sass-loader']
        },{
            test: /\.(png|git|jpe?g|svg|ico|tiff|bmp)$/i,
            type: 'asset/resource'
        }]
    },
    devServer: {
        host:'0.0.0.0',
        port: 9090, 
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}
