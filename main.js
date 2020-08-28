// 'use strict'

// Import parts of electron to use
const { app, BrowserWindow, Menu, ipcMain, ipcRenderer } = require('electron')
const path = require('path')
const url = require('url')
const DataStore = require('./src/backend/DataStore')

//Create Store
const sessionData = new DataStore({name: 'session_data'})

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Keep a reference for dev mode
let dev = false

// Broken:
// if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
//   dev = true
// }

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
  dev = true
}

// Temporary fix broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691

// if (process.platform === 'win32') {
//   app.commandLine.appendSwitch('high-dpi-support', 'true')
//   app.commandLine.appendSwitch('force-device-scale-factor', '1')
// }

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  let indexPath

  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    })
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    })
  }

  mainWindow.loadURL(indexPath)

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()

    // Open the DevTools automatically if developing
    if (dev) {
      const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')

      installExtension(REACT_DEVELOPER_TOOLS)
        .catch(err => console.log('Error loading React DevTools: ', err))
      // mainWindow.webContents.openDevTools()
    }
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // insert menu
  Menu.setApplicationMenu(mainMenu);
}

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [

      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q': 'Ctrl+Q', 
        click(){
          app.quit();
        }
      }
    ]
  }
]

// add empty menu for mac users
if (process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

//add devtools while in development
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'toggle Dev Tools',
        accelerator: process.platform == 'darwin' ? 'Command+I': 'Ctrl+I', 
        click(item, focusedWindow){
          focusedWindow.toggleDevTools(); 
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})


///////////////// This next section is adding listeners for the store/////////////////////

//add item to items list in store
ipcMain.on('add-item', (event, item)=> {
  sessionData.addItem(JSON.parse(item))
  const updatedItems = JSON.stringify(sessionData.getItems())
  mainWindow.webContents.send('items-list', updatedItems)
})

//add multiple entries to store
ipcMain.on('add-items', (event, items)=> {
  itemsList = JSON.parse(items)
  itemsList.forEach(item=>{
    sessionData.addItem(item);
  })
  const updatedItems = JSON.stringify(sessionData.getItems())
  mainWindow.send('items-list', updatedItems)
})

//delete item from items list in store
ipcMain.on('delete-item', (event, id)=>{
  const updatedItems = JSON.stringify(sessionData.deleteItem(id))
  mainWindow.webContents.send('items-list', updatedItems)
})

// send the store data to the renderer
ipcMain.on('get-items', (event)=>{
  const updatedItems = JSON.stringify(sessionData.getItems())
  mainWindow.webContents.send('items-list', updatedItems)
})

ipcMain.on('button-clicked', (event, arg)=>{
  console.log('button-click-received')
  const payloadObject = JSON.stringify({testObject: 'testObject'})
  mainWindow.send('button-click-received', payloadObject)
})