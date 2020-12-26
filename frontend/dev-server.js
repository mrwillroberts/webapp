const index_page = process.argv[2] || 'src/main/frontend/index.html';
console.log("Starting Parcel Proxy Server for:" + index_page);

const proxy = require('http-proxy-middleware').createProxyMiddleware;
const Bundler = require('parcel-bundler');
const express = require('express');

const bundler = new Bundler(index_page);
const app = express();

app.use(
  '/api',
  proxy({
    target: process.env.API_SERVER || 'http://localhost:8080/'
  })
);

app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234));