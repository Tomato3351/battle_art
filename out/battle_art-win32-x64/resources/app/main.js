const electron = require('electron');
const app = electron.app;
const BrowerWindow = electron.BrowserWindow;

var mainWindow = null;

// 当所有窗口关闭，退出.
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

//当electron完成了初始化并准备创建浏览器窗口时调用此方法.
app.on('ready', function () {
  // 创建浏览器窗口.
  mainWindow = new BrowerWindow({ width: 1280, height: 768 });
  // 加载index.html.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // 打开开发工具.
  //mainWindow.openDevTools();
  // 当window被关闭，此事件被触发.
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});