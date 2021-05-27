function Game(){
    // alert("game")
    this.row=20;
    this.col=20;
    this.f=0;
    this.score=0;
    this.init();
    this.snake=new Snake();
    this.food=new Food(this);
    this.bindEvent();
    this.start();
}
Game.prototype.init=function (){
    this.dom=document.createElement("table");
    let tr,td;
    for (let i = 0; i <this.row ; i++) {
        tr=document.createElement("tr");
        for (let j = 0; j < this.col; j++) {
             td = document.createElement("td");
            tr.appendChild(td);
        }
        this.dom.appendChild(tr);
    }
    document.getElementById("app").appendChild(this.dom);
}
Game.prototype.clear=function (){
    for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
            this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background='white';
            this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML='';

        }
    }
}
Game.prototype.setColor=function (row,col,color){
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background=color;
}
Game.prototype.setHtml=function (row,col,html){
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML=html;
}
Game.prototype.bindEvent=function (){
    var self = this;
    document.onkeydown=function (event){
    switch (event.keyCode){
        case 37:
            if(self.snake.direction=='r'){return};
            self.snake.changeDirection('l')
            break;
        case 38:
            if(self.snake.direction=='d'){return};
            self.snake.changeDirection('u')
            break;
        case 39:
            if(self.snake.direction=='l'){return};
            self.snake.changeDirection('r')
            break;
        case 40:
            if(self.snake.direction=='u'){return};
            self.snake.changeDirection('d')
            break;


    }
}
}
Game.prototype.start=function (){
    this.timer=setInterval(function (){
        game.f++;
        document.getElementById("score").innerHTML="分数："+game.score;
        game.clear();
        game.f%game.snake.speed==0&&game.snake.update();
        game.snake.render();
        game.food.render();
    },20)
}
