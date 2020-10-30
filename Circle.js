class circle
{
	constructor(x,y,r)
	{
		var options={
			'isStatic':true,
			'restitution':1,
			'friction':0,
			'density':0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		 this.image = loadImage("hexagon1.gif");
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
		

			strokeWeight(4);

        
			// fill(273,17,101);
		
			// stroke("pink");
            imageMode(CENTER);
			 image(this.image,0,0,80,80);
			//   ellipse(0,0,this.r, this.r);
			pop()
		
	}

}
