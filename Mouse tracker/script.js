const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 0.98*window.innerWidth;
canvas.height = 0.98*window.innerHeight;
const lightPinkColors = [
  { r: 255, g: 182, b: 193 }, // lightpink
  { r: 255, g: 192, b: 203 }, // pink
  { r: 255, g: 209, b: 220 }, // mistyrose
  { r: 255, g: 240, b: 245 }, // lavenderblush
  { r: 255, g: 204, b: 214 }, // light rose
  { r: 255, g: 223, b: 230 }, // blush pink
  { r: 255, g: 199, b: 214 }, // pastel pink
  { r: 255, g: 228, b: 237 }, // cotton candy pink
  { r: 255, g: 174, b: 185 }, // pale pink
  { r: 250, g: 205, b: 215 }  // baby pink
];
const lightBlueColors = [
  { r: 173, g: 216, b: 230 }, // lightblue
  { r: 135, g: 206, b: 235 }, // skyblue
  { r: 176, g: 224, b: 230 }, // powderblue
  { r: 240, g: 248, b: 255 }, // aliceblue
  { r: 224, g: 255, b: 255 }, // lightcyan
  { r: 175, g: 238, b: 238 }, // pale turquoise
  { r: 176, g: 196, b: 222 }, // light steel blue
  { r: 173, g: 230, b: 255 }, // baby blue
  { r: 191, g: 239, b: 255 }, // light sky blue
  { r: 198, g: 226, b: 255 }  // lavender blue
];
class Circle{
constructor() {
  this.radius = Math.random()*4+1,
  this.x = Math.random() * (canvas.width - 2 * this.radius) + this.radius,
  this.y = Math.random() * (canvas.height - 2 * this.radius) + this.radius,
  this.color= lightBlueColors[Math.floor(Math.random()*lightBlueColors.length)],
  this.dx= Math.random()*2-1,
  this.dy= Math.random()*2-1,
  this.minRad=this.radius;
  
}
}



let circles=[];
for ( let count=0; count<800; count++)
  circles.push(new Circle());



window.addEventListener('resize', () => {
  canvas.width = 0.98*window.innerWidth;
  canvas.height = 0.98*window.innerHeight;
  draw();
  update();
})


function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (count=0; count<800; count++){
    let tempCirc=circles[count];
    c.fillStyle=`rgb(${tempCirc.color.r}, ${tempCirc.color.g}, ${tempCirc.color.b})`;
    c.beginPath();
    c.arc(tempCirc.x, tempCirc.y, tempCirc.radius, 0, 2*Math.PI);
    c.fill();
  }
  
}
let mouseX=0;
let mouseY=0;
document.addEventListener('mousemove', (e) => {
  console.log(`Cursor coordinates: (${e.clientX}, ${e.clientY})`);
  mouseX=e.clientX;
  mouseY=e.clientY;
});
document.addEventListener('touchmove', (e) => {
  console.log(`Cursor coordinates: (${e.clientX}, ${e.clientY})`);
  mouseX=e.clientX;
  mouseY=e.clientY;
});
function update(){
  requestAnimationFrame(update);
  circles.forEach(circle => {
    circle.x+=circle.dx;
    circle.y+=circle.dy;
    if(circle.x<0+circle.radius || circle.x>canvas.width-circle.radius){
      circle.dx=-circle.dx;
    }
    if(circle.y<0+circle.radius || circle.y>canvas.height-circle.radius){
      circle.dy=-circle.dy;
    }
    if((Math.abs(mouseX-circle.x)<50&&Math.abs(mouseY-circle.y)<50)&&circle.radius<30){
      circle.radius+=1;

    }
    else if (circle.radius>circle.minRad){
      circle.radius-=0.5;

      
    }
   
  });
  draw();
}
draw();
update();
console.log(circles)


