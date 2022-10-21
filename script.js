const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d"); // the "paint-brush" of the canvas
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 200); // creating a rectangle
