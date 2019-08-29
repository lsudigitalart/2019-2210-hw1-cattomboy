/** Brenna Rowan 2210 2019 **/

function setup() {
  // put setup code here
  createCanvas(500,500); 
}

function draw() {
  // put drawing code here
  background(225,225,225);
  let b = color(0,0,0); 
  let w = color(255,255,255);
  let x = 0; 
  let y = 0; 
  let total = 0; 
  strokeWeight(2); 
  ellipse(5,8,60,60);
  fill(b);
	for (x;x <= 110;x){
	 x = x + 10;
	 y = y + 10; 
	 ellipse(x * 4,y * 4,60,60);
	 fill(w); 
  }
  x = 500;
  y = 0; 
	for (y;y <= 200;y)
	{
	 ellipse(x ,y * 4,60,60);
	 x = x - 30;
	 y = y + 10; 
	 
	fill(w); 
	}
	
 
  /**arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);**/
  
}