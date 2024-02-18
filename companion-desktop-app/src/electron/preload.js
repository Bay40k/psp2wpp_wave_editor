const { contextBridge, ipcRenderer } = require('electron');

console.log('preload.js loaded');
contextBridge.exposeInMainWorld('electronAPI', {
    receiveSavePath: (callback) => ipcRenderer.on('download-complete', (event, ...args) => callback(...args)),
});
