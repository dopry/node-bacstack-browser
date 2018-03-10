module.exports = function ElectronAppFactory(loadUrl) {
    const { app, BrowserWindow } = require('electron');
    const api = require('./lib/api');
    let win;

    const createWindow = () => {
      win = new BrowserWindow({width: 1000, height: 600});

      win.loadURL(loadUrl);

      win.on('closed', () => {
        win = null;
      });
    };

    app.on('ready', createWindow);

    app.on('activate', () => {
      if (!win) createWindow();
    })

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') app.quit();
    });
  }