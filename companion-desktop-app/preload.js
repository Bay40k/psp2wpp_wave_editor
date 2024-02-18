const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendDownloadButtonClick: (buttonId) => ipcRenderer.send('download-button-clicked', buttonId),
});
