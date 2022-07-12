const { remove, write, exists, read } = require("fs-jetpack");
const { ipcRenderer } = require("electron");

const closeButton = document.querySelector(".titleBar__closeButton");
const minimizeButton = document.querySelector(".titleBar__minimizeButton");

closeButton.addEventListener("click", () => {
  ipcRenderer.send("close");
});

minimizeButton.addEventListener("click", () => {
  ipcRenderer.send("min");
});
