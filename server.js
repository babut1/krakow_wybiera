const express = require('express');
const { renderToNodeStream } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { matchRoutes } = require('react-router-config');
const { SitemapStream, streamToPromise } = require('sitemap');
const { routes } = require('./src/common/routing');

const app = express();

app.get('/sitemap.xml', (req, res) => {
    const sitemap = new SitemapStream({ hostname: 'https://krakowwybiera.pl' });
  
    matchRoutes(routes, req.path).map(({ route }) => {
      sitemap.write({ url: route.path, changefreq: 'monthly', priority: 0.7 });
    });
  
    sitemap.end();
    streamToPromise(sitemap).then((sm) => {
      res.header('Content-Type', 'application/xml');
      res.send(sm);
    });
  });

app.listen(2001, () => console.log('Server started on port 3000'));