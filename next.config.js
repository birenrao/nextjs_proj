const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        imageRootPath: 'https://image.tmdb.org/t/p/w300',
      },
   webpack (config, options) {
       config.module.rules.push({
           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
           use: {
               loader: 'url-loader',
               options: {
                   limit: 100000
               }
           }
       });

       return config;
   }
}));