const electron = require('electron');
const app = electron.app;
const BrowerWindow = electron.BrowserWindow;

var mainWindow = null;

// �����д��ڹرգ��˳�.
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

//��electron����˳�ʼ����׼���������������ʱ���ô˷���.
app.on('ready', function () {
  // �������������.
  mainWindow = new BrowerWindow({ width: 1280, height: 768 });
  // ����index.html.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // �򿪿�������.
  //mainWindow.openDevTools();
  // ��window���رգ����¼�������.
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});