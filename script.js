window.addEventListener("load", () => {
  document.querySelector("canvas");
  var c = canvas.getContext("2d");

  let button = document.getElementById("clear");
  let slider = document.getElementById("myRange");

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

    c.lineWidth = brushSize;
    c.lineCap = "round";
    c.strokeStyle = brushColor;
    c.lineTo(e.clientX, e.clientY);
    c.stroke();
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

  //Clear Screen Button
  button.onclick = function () {
    c.clearRect(0, 0, innerWidth, innerHeight);
  };

  //Slider for BrushSize
  slider.oninput = function () {
    brushSize = slider.value;
  };
});
