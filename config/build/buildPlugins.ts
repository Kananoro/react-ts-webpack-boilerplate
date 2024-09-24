import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export function buildPlugins(html: string): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
