/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions:{
    implementation: 'sass'
  },
  webpack(config,options){
    const { isServer } = options
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: 'url-loader',
          options:{
            limit: config.inlineImageLimit,
            fallback: 'file-loader',
            publicPath: `${config.assetPrevfix}/_next/static/images/`,
            outputPath: `${isServer? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
          }
        }
      ,]
    })
    return config
  }
};

export default nextConfig;
