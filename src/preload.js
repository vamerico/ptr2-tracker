const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  loadIssues: () => ipcRenderer.invoke('load-issues'),
  saveIssues: (data) => ipcRenderer.invoke('save-issues', data),
  exportCSV: (csv) => ipcRenderer.invoke('export-csv', csv),
});
