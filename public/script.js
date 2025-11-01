function time() {
    const now = new Date();
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = h + ':' + m  + ':' + s
}
setInterval(time, 1000);
time();

function date() {
    const now = new Date();
    let d = now.getDay();
    let mo = now.getMonth();
    let y = now.getUTCFullYear();
    document.getElementById('date').textContent =  d + '/' + mo + '/' + y;
}
setInterval(date, 1000);
date();

function filesidebar() {
    document.addEventListener("DOMContentLoaded", function () {
        const openFile = document.getElementById("file");
        const fc = document.querySelector(".file-sidebar-content");
        const cr = document.getElementById("create-newfile");
        const o = document.getElementById("openfile");

        openFile.addEventListener("click", () => {
            fc.style.display = "block";
        });
        cr.addEventListener("click", () => {
            fc.style.display = "none";
        });
        o.addEventListener("click", () => {
            fc.style.display = "none";
        });
    });
};
filesidebar();

function openTaskbar() {
    document.addEventListener("DOMContentLoaded", function () {
        const openTask = document.getElementById("taskbar-open");
        const contentTask = document.querySelector(".content-taskbar");
        const setting = document.getElementById("logo-app-setting");

        openTask.addEventListener("click", () => {
            contentTask.style.display = "block";
        });
        setting.addEventListener("click", () => {
            contentTask.style.display = "none";
        });
    });
};
openTaskbar();

function AppSetting() {
    document.addEventListener("DOMContentLoaded", function () {
    const openApp = document.getElementById("logo-app-setting");
    const contentApp = document.querySelector(".content-appsetting");
    const closeApp = document.getElementById("close-appsetting");
  
    // Khi nhấn nút mở app
    openApp.addEventListener("click", () => {
      contentApp.style.display = "block";
    });
  
    // Khi nhấn nút đóng
    closeApp.addEventListener("click", () => {
      contentApp.style.display = "none";
    });
  });
};
AppSetting();