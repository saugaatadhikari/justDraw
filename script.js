window.addEventListener("load", () => {
  document.querySelector("canvas");
  var c = canvas.getContext("2d");

  let brushSize = 10; //Changes the size of the brush
  let brushColor = "black"; //Changes the color of the brush

  // Resizing the Canvas

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //Event Listeners
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mousemove", draw);

  let drawing = false;

  function startDrawing() {
    drawing = true;
  }
  function stopDrawing() {
    drawing = false;
    c.beginPath();
  }

  function draw(e) {
    if (!drawing) return;

    c.lineWidth = brushSize;
    c.lineCap = "round";
    c.strokeStyle = brushColor;
    c.lineTo(e.clientX, e.clientY);
    c.stroke();

    //console.log(e.clientX, e.clientY);
  }
});
