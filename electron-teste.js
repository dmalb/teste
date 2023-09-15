const { ipcRenderer } = require("electron");

    function executeCommand() {
      ipcRenderer.send("execute-command", "ls");
    }
