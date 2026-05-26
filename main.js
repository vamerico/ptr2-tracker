const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

const DATA_FILE = path.join(app.getPath('userData'), 'ptr2-issues.json');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 750,
    minWidth: 800,
    minHeight: 600,
    title: 'PTR2 Tracker — Controls Department',
    webPreferences: {
      preload: path.join(__dirname, 'src', 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });

// Load issues from disk
ipcMain.handle('load-issues', () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch(e) {}
  return null;
});

// Save issues to disk
ipcMain.handle('save-issues', (_, data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data), 'utf-8');
    return true;
  } catch(e) { return false; }
});

// Export CSV
ipcMain.handle('export-csv', async (_, csvContent) => {
  const { filePath } = await dialog.showSaveDialog({
    title: 'Exportar CSV',
    defaultPath: 'ptr2-issues.csv',
    filters: [{ name: 'CSV', extensions: ['csv'] }]
  });
  if (filePath) {
    fs.writeFileSync(filePath, csvContent, 'utf-8');
    return true;
  }
  return false;
});
