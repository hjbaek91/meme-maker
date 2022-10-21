const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d"); // the "paint-brush" of the canvas
canvas.width = 800;
canvas.height = 800;

ctx.rect(50, 50, 100, 100); // creating a rectangle
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath(); // creating a new path
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
