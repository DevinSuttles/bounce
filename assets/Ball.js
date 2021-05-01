class Ball{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.x_speed = 0;
        this.y_speed = 5;
        this.radius = 5;
        this.score = 0;
    }

    update(paddle1) {
        this.x += this.x_speed;
        this.y += this.y_speed;
        var top_x = this.x - 5;
        var top_y = this.y - 5;
        var bottom_x = this.x + 5;
        var bottom_y = this.y + 5;
      
        if(this.x - 5 < 0) {
          this.x = 5;
          this.x_speed = -this.x_speed;
        } else if(this.x + 5 > 700) {
          this.x = 695;
          this.x_speed = -this.x_speed;
        } 

        if (this.y - 5 < 0) {
          this.y = 5;
          this.x_speed += 1;
          this.y_speed = -this.y_speed;
        }

        if( this.y > 600) {
          this.x_speed = 0;
          this.y_speed = 3;
          this.x = 350;
          this.y = 300;
          this.score = 0;
          this.gameOver = true;
          document.getElementById("navbar-score").innerHTML = this.score;
        }
      
        if(top_y > 400) {
          if(top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
            this.y_speed = -3;
            this.x_speed += (paddle1.x_speed / 2);
            this.y += this.y_speed;
            this.score += 1;
             document.getElementById("navbar-score").innerHTML = this.score;
          }
        }
  }
}