const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      webviewTag: true, // Make sure this is set to true
    },
    preload: `./preload.js`, // Use a preload script
  });

  // Load the index.html file
  win.loadFile("index.html");

  // Intercept file downloads
  const webContentSession = win.webContents.session; // For default session
  webContentSession.on("will-download", (event, item, webContents) => {
    // Set the save path, making Electron not to prompt a save dialog
    const savePath = path.resolve("./downloads", item.getFilename());
    item.setSavePath(savePath);
    console.log(`Saving to ${savePath}`);


    // do download
    item.once("done", (event, state) => {
      if (state === "completed") {
        console.log(`Downloaded successfully to ${savePath}`);
      } else {
        console.error(`Download failed: ${state}`);
      }
    });

    // Prevent default download behavior
    // event.preventDefault();

  });
}

app.whenReady().then(createWindow);