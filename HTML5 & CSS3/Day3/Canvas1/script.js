let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

// Blue
let grd1 = ctx.createLinearGradient(0, 0, 0, 200);
grd1.addColorStop(0, "#03bdff");
grd1.addColorStop(1, "#cff2ff");
ctx.fillStyle = grd1;
ctx.strokeStyle = grd1;
ctx.beginPath();
ctx.fillRect(0, 0, 400, 200);

// Green
let grd2 = ctx.createLinearGradient(0, 400, 0, 200);
grd2.addColorStop(0, "#03ff7d");
grd2.addColorStop(1, "#cfffe6");
ctx.fillStyle = grd2;
ctx.strokeStyle = grd2;
ctx.beginPath();
ctx.fillRect(0, 200, 400, 400);

// Left
let grd3 = ctx.createLinearGradient(100, 100, -10, 350);
grd3.addColorStop(0, "black");
grd3.addColorStop(1, "#66666635");
ctx.fillStyle = grd3;
ctx.strokeStyle = grd3;
ctx.fillRect(100, 120, 10, 150);

// Right
let grd4 = ctx.createLinearGradient(50, 50, -10, 200);
grd4.addColorStop(0, "black");
grd4.addColorStop(1, "#66666635");
ctx.fillStyle = grd4;
ctx.strokeStyle = grd4;
ctx.fillRect(300, 120, 10, 150);

// Above
let grd5 = ctx.createLinearGradient(100, 100, 0, 300);
grd5.addColorStop(0, "black");
grd5.addColorStop(1, "#66666635");
ctx.fillStyle = grd5;
ctx.strokeStyle = grd5;
ctx.fillRect(100, 120, 200, 10);
