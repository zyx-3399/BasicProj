function Snake(){
    this.body=[
    {"row":2,"col":4},
    {"row":2,"col":3},
    {"row":2,"col":2},
    {"row":2,"col":1}
    ];
    this.direction="r";
    this.willDirection='r';
    this.speed=40;
}

Snake.prototype.render=function (){
    game.setColor(this.body[0].row,this.body[0].col,'pink');
    for (let i = 1; i < this.body.length; i++) {
        game.setColor(this.body[i].row,this.body[i].col,'skyblue')
    }
}
Snake.prototype.update=function (){
    this.direction=this.willDirection;//防止定时器执行前direction改变，妙啊
    switch (this.direction){
        case "r":this.body.unshift({"row":this.body[0].row,"col":this.body[0].col+1});
        break;
        case "d":this.body.unshift({"row":this.body[0].row+1,"col":this.body[0].col});
        break;
        case "l":this.body.unshift({"row":this.body[0].row,"col":this.body[0].col-1});
        break;
        case "u":this.body.unshift({"row":this.body[0].row-1,"col":this.body[0].col});
        break;
    }
    if (this.body[0].col>game.col-1||this.body[0].row>game.row-1||this.body[0].row<0||this.body[0].col<0){
        alert("Game Over");
        this.body.shift();
        clearInterval(game.timer);
    }
    for (let i = 1; i < this.body.length; i++) {
        if(this.body[0].col==this.body[i].col&&this.body[0].row==this.body[i].row){
            alert("Game Over");
            this.body.shift();
            clearInterval(game.timer);
        }
    }
    if(this.body[0].row==game.food.row&&this.body[0].col==game.food.col){
        game.food=new Food(game);
        game.f=0;
        game.score++;
        if(this.speed>4){
            this.speed-=2;
        }
        else {
          this.speed=4
        }

    }
    else {
        this.body.pop();
    }
}

Snake.prototype.changeDirection=function (d){
    this.willDirection=d;
}