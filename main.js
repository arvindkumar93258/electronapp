const { app, BrowserView, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');



function createWindow() {
    const mainWindow = new BrowserWindow({
        title: 'ElectronApp',
        width: 1000,
        height: 800,

    });

    mainWindow.webContents.openDevTools();

    const startUrl = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file'
    })

    mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);
