let font;
let responsiveText = 250;
let vehicles = [];
function preload () {
  font = loadFont('../kitilibup.github.io/caveat-regular.otf');
}

function setup() {
  let cardCanvas = createCanvas(windowWidth, windowHeight);
  // textFont(font);
  // textSize(400);
  // fill(255);
  // noStroke();
  // text('Postcard F', 100, 200);
  let points = font.textToPoints('The Ocean', windowWidth/4, windowHeight/2, responsiveText, {
  sampleFactor: 0.1
  });
  for(let i = 0; i<points.length; i++) {
  let pt = points[i];
  let vehicle = new Vehicle(pt.x, pt.y);
  vehicles.push(vehicle);
  };
  cardCanvas.parent('canvas-holder');
  cardCanvas.style('position', 'absolute');
  cardCanvas.style('top', '0');
  cardCanvas.style('left', '0');
  cardCanvas.style('z-index', '2');

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//     if(windowWidth < 1000) {
//       responsiveText = 800;
//     } else {
//     responsiveText = 700;
//     }
// }

console.log(responsiveText);

function draw() {
  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}