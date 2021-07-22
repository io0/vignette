let t = 0;
let b = 150;
let sampleRate = 43;
let interval = 1000 / sampleRate; // in milliseconds
let numShow = Math.ceil(3 * sampleRate);
console.log({ numShow });
let temp = 0;
function preload() {
  // spec = loadJSON(path);
}

function setup() {
  createCanvas(1200, 400);
}

const cmap = [
  "#000083",
  "#001e97",
  "#003caa",
  "#027dc6",
  "#03bee3",
  "#fdaa00",
  "#fc5500",
  "#fa0000",
  "#bd0000",
  "#800000",
  "#000083",
  "#001e97",
  "#003caa",
  "#027dc6",
  "#03bee3",
  "#fdaa00",
  "#fc5500",
  "#fa0000",
  "#bd0000",
  "#800000",
];

function draw() {
  // if (temp % 10 == 0) {
  noStroke();
  let prev = 0;
  let ms = millis();
  t = Math.ceil(ms / interval);
  if (spec) {
    background(0);
    let startingTime = max(0, t - numShow);
    for (let i = startingTime; i < t; i++) {
      for (let freq = 0; freq < 15; freq++) {
        let amp = spec[freq][i];
        let x = (i - min(t - numShow, startingTime)) * (width / numShow);
        let y = amp * 50 + b;
        // console.log(cmap[freq]);
        fill(cmap[freq]);
        ellipse(x, y, 3, 3);
      }
    }
    // console.log(spec[0]);
  }
  // }
  // temp++;
}
