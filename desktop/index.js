const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const window = new BrowserWindow({
    title: 'CodePen',
    autoHideMenuBar: true,
    resizable: false,
    width: 1280,
    height: 720,
    icon: path.join(__dirname, './src/app/favicon.ico'),
  })
  window.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)
