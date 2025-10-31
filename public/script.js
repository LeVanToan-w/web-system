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