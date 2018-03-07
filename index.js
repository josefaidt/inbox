const {app, BrowserWindow} = require('electron')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 1200, height: 800})
  
    win.loadURL('https://inbox.google.com')
  }
  
  app.on('ready', createWindow)