let electron = require('electron');
let app = electron.app;
let win = null;
let ipc = electron.ipcMain;

function createWindow () {
    // Create the browser window.
    win = new electron.BrowserWindow({width: 250, height: 300, frame: false, resizable: false, webPreferences: {devTools: false}, backgroundColor: "#2f2f2f"});

    // and load the index.html of the app.
    win.loadFile('the_actual_app/load.html');

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    } else if (loaded == false) { // You should very much so assume that the platform is darwin, as the previous check filters all others out
        app.quit();
    }
});

/* Once we actually get the loading ui finished, this code can be introduced.

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (loaded === true) {
        createActualWindow();
    }
});
*/

