class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
      if(this.body.speed < 1){
       this.Visibility=255; 
      }
      else{
        
        push();
        World.remove(world,this.body);
        this.Visibility = 0;
        tint(0,this.Visibility);

        
        pop();
      }
      
    }
    }
