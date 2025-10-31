function time() {
    const now = new Date();
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('time').textContent = h + ':' + m;
}
setInterval(time, 1000);
time();