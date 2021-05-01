class Paddle {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.x_speed = 0;
        this.y_speed = 0;
        this.keysDown = {};
    }

    move(x, y){
        this.x += x;
        this.y += y;
        this.x_speed = x;
        this.y_speed = y;
        if (this.x < 0){
            this.x = 0;
            this.x_speed = 0;
        } else if (this.x + this.width > 700){
            this.x = 700 - this.width;
            this.x_speed = 0;
        }
    }

    update(){
        for (let key in this.keysDown){
            let val = Number(key);
            if (val == 37){
                this.move(-4, 0);
            } else if (val == 39){
                this.move(4, 0);
            } else {
                this.move(0,0);
            }
        }
    }
}
