
const ElectronAppFactory = require('./ElectronAppFactory');
const url = require('url');
const path = require('path');

ElectronAppFactory(url.format({
  pathname: path.join(__dirname, 'dist' , 'index.html'),
  protocol: 'file:',
  slashes: true
}));