/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

const path = require('path');

const nextConfig = withBundleAnalyzer({
    compress: true,
    reactStrictMode: false,
    webpack (config, { webpack }) {
        const prod = process.env.NODE_ENV === 'production';
        config.resolve = {
            alias: {
                '@reducers': path.resolve(__dirname, 'src/reducers'),
                '@fonts': path.resolve(__dirname, 'src/fonts'),
                '@images': path.resolve(__dirname, 'src/images'),
                '@store': path.resolve(__dirname, 'src/store'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@components': path.resolve(__dirname, 'src/components')
            },
            ...config.resolve
        };
        return {
            ...config,
            mode: prod ? 'production' : 'development',
            devtool: prod ? 'hidden-source-map' : 'eval',
            plugins: [
                ...config.plugins,
                new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/)
            ]
        };
    }
});

module.exports = nextConfig;
