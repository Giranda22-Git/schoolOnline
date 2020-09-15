module.exports = {
    apps : [{
      name: 'udb-api',
      script: './server/index.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'udb-ui',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: './web/dist',
        PM2_SERVE_PORT: 8080,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
      }
    }]
}
