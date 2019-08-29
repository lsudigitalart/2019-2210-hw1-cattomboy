/** Brenna Rowan 2210 2019 **/

function setup() {
  // put setup code here
  createCanvas(500,500);
  noLoop();
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
		if (random(1,10) <= 5) 
		{
			fill(b);
			stroke(color(255,255,255));
		}
		x = x + 10;
		y = y + 10;
		ellipse(x * 4,y * 4,60,60);
		fill(w);
		stroke(color(0,0,0));
  }
  x = 500;
  y = 0;
	for (y;y <= 200;y)
	{
		if (random(1,10) <= 5) 
		{
			fill(b);
			stroke(color(255,255,255));
		}
		
		ellipse(x ,y * 4,60,60);
		x = x - 30;
		y = y + 10;
		fill(w);
		stroke(color(0,0,0));
	
	}


  /**arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);**/

}

