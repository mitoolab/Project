var path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    // 진입점
    entry: './src/js/entry.js'
  },

  output: {
    // html과 연결되는 파일 (최종 변환)
    filename: 'bundle.js',
    // 번들 이름과 위치를 지정
    path: path.resolve(__dirname, 'dist/js')
  },
  // webpack 기능
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/js')
      ],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },
    {
      test: /\.(scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader?outputStyle=nested']
      })
    }]
  },
  // css code 분리
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  devtool: 'source-map'
};


// var path = require('path');
// var webpack = require('webpack');

// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// var rootAssetPath = './hjlog/static';
// var absRootAssetPath = path.resolve(rootAssetPath);

// var plugins = [
//   new ExtractTextPlugin('style.css'),
// ];

// module.exports = {
//   // 의존성 트리의 루트 노드가 되는 진입점
//   entry: {
//     bundle: rootAssetPath + '/js/hjlog.js',
//   },
//   // entry에서 부터 구축한 의존성 트리를 바탕으로 만들어낸 번들이 어디에, 어떤 파일 이름으로 저장될지를 지정하는 옵션
//   output: {
//     // 빌드 결과물이 들어갈 (webpack.config.js로부터의) 상대 경로
//     path: 'hjlog/static/public',
//     // 웹사이트에서 해당 에셋에 접근하기 위해 필요한 경로
//     publicPath: '/static/public/',
//     // 각 번들들의 파일명
//     filename: '[name].js',
//   },
//   //  모듈명을 어떻게 해석할지에 대한 옵션
//   resolve: {
//     // 모듈명 뒤에 여기 명시된 확장자명들을 붙여보며 탐색을 수행
//     extensions: ['', '.js', '.css']
//   },
//   // 의존성 트리 내의 각 모듈들을 어떻게 핸들링할지에 대한 옵션
//   module: {
//     // 
//     loaders: [
//       {
//         test: /\.scss$/,
//         loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'sass-loader?outputStyle=nested'])
//       },
//       /* Font-Awesome */
//       { test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000' },
//       { test: /\.(ttf|eot)$/, loader: 'file' }
//     ]
//   },
//   plugins: plugins
// };

